import { Action } from '@ngrx/store';
import { Observable } from "rxjs";
import { HttpErrorResponse } from '@angular/common/http';
import { RacingBet } from "./models/trending-bets";
import { RacingBetActions, RacingBetActionTypes } from './trending-bets.actions';

export interface State {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  data: RacingBet[] | null;
  test: string;
}

export const initialState: State = {
  isLoading: false,
  error: null,
  data: [],
  test: "hello"
};

export function reducer(state = initialState, action: RacingBetActions): State {
  switch (action.type) {

    case RacingBetActionTypes.FetchRacingBets:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case RacingBetActionTypes.FetchRacingBetsSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case RacingBetActionTypes.FetchRacingBetsError:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
