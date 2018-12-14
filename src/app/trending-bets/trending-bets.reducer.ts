import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { HttpErrorResponse } from '@angular/common/http';
import { RacingBet } from "./models/trending-bets";
import { RacingBetActions, RacingBetActionTypes } from './trending-bets.actions';

// Need to Change the effect to send CRUD depending on the resulted payload
// https://medium.com/@alexmaisiura/angular-ngrx-data-state-management-and-crud-for-five-minutes-c71041cca917
// https://medium.com/@viestursv/how-to-get-store-state-in-ngrx-effect-fab9e9c8f087
// https://brianflove.com/2018/03/21/master-rxjs-operators/

export interface State extends EntityState<RacingBet> {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  trendingBetsRacing: RacingBet[] | null;
}

function sortByPropositionNumber(e1: RacingBet, e2: RacingBet) {
  return e1.propositionNumber - e2.propositionNumber;
}

export interface trendingBetsRacingState extends EntityState<RacingBet> { }

export const trendingBetsRacingAdapter: EntityAdapter<RacingBet> = createEntityAdapter<RacingBet>({
  selectId: (bet: RacingBet) => bet.propositionNumber,
  sortComparer: sortByPropositionNumber
});

export const initialState: trendingBetsRacingState = trendingBetsRacingAdapter.getInitialState();

export function reducer(state = initialState, action: RacingBetActions): trendingBetsRacingState {
  switch (action.type) {
    case RacingBetActionTypes.FetchRacingBetsAddAll:
      return {
        ...trendingBetsRacingAdapter.addAll(action.payload, state)
      };
    case RacingBetActionTypes.FetchRacingBetsAddMany:
      return {
        ...trendingBetsRacingAdapter.addMany(action.payload, state)
      };
    case RacingBetActionTypes.FetchRacingBetsUpdateMany:
      return {
        ...trendingBetsRacingAdapter.updateMany(
          action.payload.map((bet) => Object.assign({}, { id: bet.propositionNumber, changes: bet })),
          { ...state })
      };
    case RacingBetActionTypes.FetchRacingBetsDeleteMany:
      return {
        ...trendingBetsRacingAdapter.removeMany(action.payload, state)
      };
    default:
      return state;
  }
}
