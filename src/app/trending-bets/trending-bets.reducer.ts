import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { HttpErrorResponse } from '@angular/common/http';
import { RacingBet } from "./models/trending-bets";
import { RacingBetActions, RacingBetActionTypes } from './trending-bets.actions';

export interface State {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  trendingBetsRacing: RacingBet[] | null;
}

export interface trendingBetsRacingState extends EntityState<RacingBet> { }

export const trendingBetsRacingAdapter: EntityAdapter<RacingBet> = createEntityAdapter<RacingBet>({
  selectId: (bet: RacingBet) => bet.propositionNumber,
  sortComparer: false
});

export const initialState: trendingBetsRacingState = trendingBetsRacingAdapter.getInitialState();

export function reducer(state = initialState, action: RacingBetActions): trendingBetsRacingState {
  switch (action.type) {

    // case RacingBetActionTypes.FetchRacingBets:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     error: null
    //   };

    case RacingBetActionTypes.FetchRacingBetsSuccess:
      // return trendingBetsRacingAdapter.updateMany(
      //   action.payload.map((bet) => Object.assign({}, { id: bet.propositionNumber, changes: bet })),
      //   { ...state, loaded: true, loading: false }
      // );
      return {
        ...trendingBetsRacingAdapter.addAll(action.payload, state)
      };

    // case RacingBetActionTypes.FetchRacingBetsError:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.payload
    //   };

    default:
      return state;
  }
}
