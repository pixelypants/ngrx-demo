import {
  Action,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { BetSlipActions, BetSlipActionTypes } from './bet-slip.actions';

export interface BetslipState {
  singleBetIds: string[]
}

export const initialState: BetslipState = {
  singleBetIds: [],
};

export function reducer(state = initialState, action: BetSlipActions): BetslipState {
  switch (action.type) {

    case BetSlipActionTypes.AddSingleBet:
      return {
        ...state,
        singleBetIds: state.singleBetIds.concat(action.payload)
      };
    case BetSlipActionTypes.RemoveSingleBet:
      return {
        ...state,
        singleBetIds: state.singleBetIds.filter((item, index) => item !== action.payload)
      };
    case BetSlipActionTypes.ClearSingleBets:
      return {
        ...state,
        singleBetIds: []
      };

    default:
      return state;
  }
}

export const selectBetslipState = createFeatureSelector<BetslipState>('betslip');
export const getSingleBetIds = createSelector(selectBetslipState,
  (state: BetslipState) => state.singleBetIds);