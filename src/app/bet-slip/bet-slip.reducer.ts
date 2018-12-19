import { Action } from '@ngrx/store';
import { BetSlipActions, BetSlipActionTypes } from './bet-slip.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: BetSlipActions): State {
  switch (action.type) {

    case BetSlipActionTypes.LoadBetSlips:
      return state;


    default:
      return state;
  }
}
