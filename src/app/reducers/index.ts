import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTrendingBets from "../trending-bets/trending-bets.reducer";

export interface State {
  raceBets: fromTrendingBets.State;
}

export const reducers: ActionReducerMap<State> = {
  raceBets: fromTrendingBets.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getRacingBetsState = createFeatureSelector<fromTrendingBets.State>('raceBets');
export const getRacingBets = createSelector(getRacingBetsState, state => state.data);
export const getIsRacingBetsLoading = createSelector(getRacingBetsState, state => state.isLoading);
