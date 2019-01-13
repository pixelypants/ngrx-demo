import { Action } from '@ngrx/store';

export enum BetSlipActionTypes {
  AddSingleBet = '[BetSlip] Add Single Bet',
  RemoveSingleBet = '[BetSlip] Remove Single Bet',
  ClearSingleBets = '[BetSlip] Clear Single Bets',
}

export class AddSingleBet implements Action {
  readonly type = BetSlipActionTypes.AddSingleBet;
  constructor(public payload: string) { }
}
export class RemoveSingleBet implements Action {
  readonly type = BetSlipActionTypes.RemoveSingleBet;
  constructor(public payload: string) { }
}
export class ClearSingleBets implements Action {
  readonly type = BetSlipActionTypes.ClearSingleBets;
}
export type BetSlipActions =
  AddSingleBet | RemoveSingleBet | ClearSingleBets;
