import { Action } from '@ngrx/store';
import { RacingBetResponse, RacingBet } from "./models/trending-bets";
import { HttpErrorResponse } from '@angular/common/http';
import { Update } from '@ngrx/entity';

export enum RacingBetActionTypes {
  FetchRacingBetsInit = '[RacingBet] Load RacingBets Init',
  FetchRacingBets = '[RacingBet] Load RacingBets',
  FetchRacingBetsUpdateMany = '[RacingBet] Load RacingBets Update Many',
  FetchRacingBetsDeleteMany = '[RacingBet] Load RacingBets Delete Many',
  FetchRacingBetsAddMany = '[RacingBet] Load RacingBets Add Many',
  FetchRacingBetsAddAll = '[RacingBet] Load RacingBets Add All',
  FetchRacingBetsError = '[RacingBet] Load RacingBets Error',
}

export class FetchRacingBetsInit implements Action {
  readonly type = RacingBetActionTypes.FetchRacingBetsInit;
}
export class FetchRacingBets implements Action {
  readonly type = RacingBetActionTypes.FetchRacingBets;
}
export class FetchRacingBetsUpdateMany implements Action {
  readonly type = RacingBetActionTypes.FetchRacingBetsUpdateMany;
  constructor(public payload: RacingBet[]) { }
}
export class FetchRacingBetsDeleteMany implements Action {
  readonly type = RacingBetActionTypes.FetchRacingBetsDeleteMany;
  constructor(public payload: number[]) { }
}
export class FetchRacingBetsAddMany implements Action {
  readonly type = RacingBetActionTypes.FetchRacingBetsAddMany;
  constructor(public payload: RacingBet[]) { }
}
export class FetchRacingBetsAddAll implements Action {
  readonly type = RacingBetActionTypes.FetchRacingBetsAddAll;
  constructor(public payload: RacingBet[]) { }
}
export class FetchRacingBetsError implements Action {
  readonly type = RacingBetActionTypes.FetchRacingBetsError;
  constructor(public payload: HttpErrorResponse) { }
}

export type RacingBetActions =
  FetchRacingBets |
  FetchRacingBetsAddAll |
  FetchRacingBetsAddMany |
  FetchRacingBetsDeleteMany |
  FetchRacingBetsUpdateMany |
  FetchRacingBetsError;
