import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { Observable, of } from "rxjs";
import { environment } from '../../environments/environment';
import * as fromTrendingBets from "../trending-bets/trending-bets.reducer";
import { RacingBet } from '../trending-bets/models/trending-bets';

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


export const racingBetsList = createSelector(getRacingBetsState,
  (state: fromTrendingBets.State) => state.data)