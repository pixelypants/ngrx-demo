import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTrendingBets from "../trending-bets/trending-bets.reducer";

export interface State {
  raceBets: fromTrendingBets.trendingBetsRacingState;
}

export const reducers: ActionReducerMap<State> = {
  raceBets: fromTrendingBets.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectRacingBetsState = createFeatureSelector<fromTrendingBets.trendingBetsRacingState>('raceBets');
// export const selectRacingBets = fromTrendingBets.trendingBetsRacingAdapter.getSelectors(selectRacingBetsState);
export const selectTrendingBetRacing = (id: string) => createSelector(
  selectRacingBetsState,
  (state: fromTrendingBets.trendingBetsRacingState) => state.entities[id]
);

export const {
  selectIds: selectTrendingBetsRacingIds,
  selectEntities: selectTrendingBetsRacingEntities,
  selectAll: selectAllTrendingBetsRacing,
  selectTotal: selectTrendingBetsRacingTotal
} = fromTrendingBets.trendingBetsRacingAdapter.getSelectors(selectRacingBetsState);

// export const getRacingBetsState = createFeatureSelector<fromTrendingBets.State>('raceBets');
// export const getRacingBets = createSelector(getRacingBetsState, state => state.trendingBetsRacing);
// export const getIsRacingBetsLoading = createSelector(getRacingBetsState, state => state.isLoading);


// export const racingBetsList = createSelector(selectRacingBetsState,
//   (state: fromTrendingBets.State) => state.trendingBetsRacing)