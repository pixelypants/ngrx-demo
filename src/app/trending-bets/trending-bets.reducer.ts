import {
  Action,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { HttpErrorResponse } from '@angular/common/http';
import { RacingBet } from "./models/trending-bets";
import { RacingBetActions, RacingBetActionTypes } from './trending-bets.actions';
import { Observable, of, timer, from } from 'rxjs';
import { map, flatMap, tap, merge, find, distinct, skip, concat, concatMap, combineLatest, filter, scan, takeWhile, skipUntil, findIndex } from 'rxjs/operators';

// Need to Change the effect to send CRUD depending on the resulted payload
// https://medium.com/@alexmaisiura/angular-ngrx-data-state-management-and-crud-for-five-minutes-c71041cca917
// https://medium.com/@viestursv/how-to-get-store-state-in-ngrx-effect-fab9e9c8f087
// https://brianflove.com/2018/03/21/master-rxjs-operators/

// normalized state
// https://netbasal.com/querying-a-normalized-state-with-rxjs-in-angular-71ecd7ca25b4

export interface TrendingBetsRacingState extends EntityState<RacingBet> {
  initLoaded: boolean;
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

function sortByPropositionNumber(e1: RacingBet, e2: RacingBet) {
  return e1.propositionNumber - e2.propositionNumber;
}

export const trendingBetsRacingAdapter: EntityAdapter<RacingBet> = createEntityAdapter<RacingBet>({
  selectId: (bet: RacingBet) => bet.propositionNumber,
  sortComparer: sortByPropositionNumber
});

export const initialState: TrendingBetsRacingState = trendingBetsRacingAdapter.getInitialState({
  initLoaded: false,
  isLoading: false,
  error: null
});

export function reducer(state = initialState, action: RacingBetActions): TrendingBetsRacingState {
  switch (action.type) {
    case RacingBetActionTypes.FetchRacingBetsInit:
      return {
        ...state,
        initLoaded: false,
        isLoading: true,
        error: null
      };
    case RacingBetActionTypes.FetchRacingBetsAddAll:
      return {
        ...trendingBetsRacingAdapter.addAll(action.payload, { ...state, initLoaded: true, isLoading: false }),
      };
    case RacingBetActionTypes.FetchRacingBetsAddMany:
      return {
        ...trendingBetsRacingAdapter.addMany(action.payload, state)
      };
    case RacingBetActionTypes.FetchRacingBetsSuccess:
      return {
        ...trendingBetsRacingAdapter.addAll(action.payload, state)
      };
    case RacingBetActionTypes.FetchRacingBetsRemoveAll:
      return {
        ...trendingBetsRacingAdapter.removeAll(state)
      };
    case RacingBetActionTypes.FetchRacingBetsUpsertMany:
      return {
        ...trendingBetsRacingAdapter.upsertMany(action.payload, state)
        // action.payload.map((bet) => Object.assign({}, { id: bet.propositionNumber, changes: bet })),
      };
    case RacingBetActionTypes.FetchRacingBetsDeleteMany:
      // Merging streams: https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511
      const deleteItems = []
      const filterDeleteItems = from(action.payload).pipe(
        concat(state.ids),
        distinct(),
        skip(action.payload.length),
        map(x => x)
      ).subscribe(val => {
        console.log(`subscribe: ${val}`)
        deleteItems.push(val)
      })
      return {
        ...trendingBetsRacingAdapter.removeMany(deleteItems, state)
      };
    default:
      return state;
  }
}

// Selectors
export const selectRacingBetsState = createFeatureSelector<TrendingBetsRacingState>('raceBets');
export const selectTrendingBetRacing = (id: string) => createSelector(
  selectRacingBetsState,
  (state: TrendingBetsRacingState) => state.entities[id]
);
export const selectTrendingBetRacingInitLoaded = createSelector(
  selectRacingBetsState,
  (state: TrendingBetsRacingState) => state.initLoaded
);

export const selectTrendingBetRacingLoading = createSelector(
  selectRacingBetsState,
  (state: TrendingBetsRacingState) => {
    if (!state.initLoaded) {
      return state.isLoading
    }
    return false;
  }
);
export const {
  selectIds: selectTrendingBetsRacingIds,
  selectEntities: selectTrendingBetsRacingEntities,
  selectAll: selectAllTrendingBetsRacing,
  selectTotal: selectTrendingBetsRacingTotal
} = trendingBetsRacingAdapter.getSelectors(selectRacingBetsState);
