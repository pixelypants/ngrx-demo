import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromHeroes from '../heroes/heroes.reducer';
import * as fromTrendingBets from "../trending-bets/trending-bets.reducer";

export interface State {
  heroes: fromHeroes.State;
  raceBets: fromTrendingBets.State;
}

export const reducers: ActionReducerMap<State> = {
  heroes: fromHeroes.reducer,
  raceBets: fromTrendingBets.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getHeroesState = createFeatureSelector<fromHeroes.State>('heroes');
export const getHeroes = createSelector(getHeroesState, state => state.data);
export const getIsLoading = createSelector(getHeroesState, state => state.isLoading);
export const getCurrentPage = createSelector(getHeroesState, state => state.page);
export const getIsFirstPage = createSelector(getHeroesState, state => !state.previous);
export const getIsLastPage = createSelector(getHeroesState, state => !state.next);


export const getRacingBetsState = createFeatureSelector<fromTrendingBets.State>('raceBets');
export const getRacingBets = createSelector(getRacingBetsState, state => state.data);
export const getIsRacingBetsLoading = createSelector(getRacingBetsState, state => state.isLoading);
