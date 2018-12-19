import { Action } from '@ngrx/store';

export enum BetSlipActionTypes {
  LoadBetSlips = '[BetSlip] Load BetSlips'
}

export class LoadBetSlips implements Action {
  readonly type = BetSlipActionTypes.LoadBetSlips;
}

export type BetSlipActions = LoadBetSlips;
