import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTrendingBets from "../trending-bets/trending-bets.reducer";

export interface State {
  raceBets: fromTrendingBets.TrendingBetsRacingState;
}

export const reducers: ActionReducerMap<State> = {
  raceBets: fromTrendingBets.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];