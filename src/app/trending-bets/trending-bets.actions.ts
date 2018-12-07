import { Action } from '@ngrx/store';
import { RacingBetResponse, RacingBet } from "./models/trending-bets";
import { HttpErrorResponse } from '@angular/common/http';

export enum RacingBetActionTypes {
  FetchRacingBets = '[RacingBet] Load RacingBets',
  FetchRacingBetsSuccess = '[RacingBet] Load RacingBets Success',
  FetchRacingBetsError = '[RacingBet] Load RacingBets Error',
}

export class FetchRacingBets implements Action {
  readonly type = RacingBetActionTypes.FetchRacingBets;
}

export class FetchRacingBetsSuccess implements Action {
  readonly type = RacingBetActionTypes.FetchRacingBetsSuccess;
  // public payload: RacingBetResponse = {
  //   results: []
  // }
  constructor(public payload: RacingBet[]) {
    //this.payload.results = results;
  }
}

export class FetchRacingBetsError implements Action {
  readonly type = RacingBetActionTypes.FetchRacingBetsError;

  constructor(public payload: HttpErrorResponse) { }
}

export type RacingBetActions = FetchRacingBets | FetchRacingBetsSuccess | FetchRacingBetsError;
