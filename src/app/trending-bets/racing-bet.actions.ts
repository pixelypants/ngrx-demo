import { Action } from '@ngrx/store';
import { RacingBetResponse } from "./models/trending-bets";
import { HttpErrorResponse } from '@angular/common/http';

export enum RacingBetActionTypes {
  FetchRacingBets = '[RacingBet] Load RacingBets',
  FetchRacingBetsSuccess = '[Heroes] Load Heroes Success',
  FetchRacingBetsError = '[Heroes] Load Heroes Error',
}

export class FetchRacingBets implements Action {
  readonly type = RacingBetActionTypes.FetchRacingBets;
}

export class FetchRacingBetsSuccess implements Action {
  readonly type = RacingBetActionTypes.FetchRacingBetsSuccess;

  constructor(public payload: RacingBetResponse) { }
}

export class FetchRacingBetsError implements Action {
  readonly type = RacingBetActionTypes.FetchRacingBetsError;

  constructor(public payload: HttpErrorResponse) { }
}

export type RacingBetActions = FetchRacingBets | FetchRacingBetsSuccess | FetchRacingBetsError;
