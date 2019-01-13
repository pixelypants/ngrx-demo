import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTrendingBets from "../trending-bets/trending-bets.reducer";
import * as fromBetslip from "../bet-slip/bet-slip.reducer";

export interface State {
  raceBets: fromTrendingBets.TrendingBetsRacingState;
  betslip: fromBetslip.BetslipState
}

export const reducers: ActionReducerMap<State> = {
  raceBets: fromTrendingBets.reducer,
  betslip: fromBetslip.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];