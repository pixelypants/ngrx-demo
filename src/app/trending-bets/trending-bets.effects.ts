import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TrendingBetsRacingState, selectRacingBetsState } from './trending-bets.reducer';
import * as fromSelectors from './trending-bets.reducer';
import { TrendingBetsService } from './trending-bets.service';
import {
  FetchRacingBetsError,
  FetchRacingBetsAddAll,
  FetchRacingBetsUpsertMany,
  RacingBetActionTypes,
  FetchRacingBetsDeleteMany,
} from './trending-bets.actions';
import { of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, tap, } from 'rxjs/operators';
// Effect patterns 2 or more streams and combine when both are returned and retun final action with concatinated payload
// https://medium.com/default-to-open/angular-splitter-and-aggregation-patterns-for-ngrx-effects-c6f2908edf26
// Good vidoe talk from article: https://www.youtube.com/watch?v=FQ6fzkHvCEY&t=1076s
// Extention to ng cli: https://nrwl.io/nx

// mapping explained
// https://blog.angular-university.io/rxjs-higher-order-mapping/

// Operator animations
// https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511
// https://gist.github.com/PCreations/99765f48b1f60c9427c479c25f3e3bbd

// Switchmap bugs and flattening operators explained
// https://blog.angularindepth.com/switchmap-bugs-b6de69155524

@Injectable()
export class RacingBetEffects {

  @Effect()
  fetchInit$ = this.actions$
    .ofType(RacingBetActionTypes.FetchRacingBetsInit)
    .pipe(
      switchMap(() =>
        this.service$.getRacingBets_mocked("/api/initBets")
          .pipe(
            tap(() => console.log("(trending-bets.effects) RacingBetActionTypes.FetchRacingBetsInit ")),
            map(results => {
              return new FetchRacingBetsAddAll(results)
            }),
            catchError(err => of(new FetchRacingBetsError(err))
            )
          )
      )
    )

  @Effect()
  fetch$ = this.actions$
    .ofType(RacingBetActionTypes.FetchRacingBets)
    .pipe(
      switchMap(() =>
        this.service$.getRacingBets_mocked("/api/updatedBets")
          .pipe(
            tap(() => console.log("(trending-bets.effects) RacingBetActionTypes.FetchRacingBets ")),
            withLatestFrom(this.store$.select(selectRacingBetsState)),
            // Multiple actions from one effect: https://medium.com/@amcdnl/dispatching-multiple-actions-from-ngrx-effects-c1447ceb6b22
            switchMap(([results, state]) => [
              new FetchRacingBetsDeleteMany(results.map(itm => itm.propositionNumber)),
              new FetchRacingBetsUpsertMany(results),
            ]),
            catchError(err => of(new FetchRacingBetsError(err))
            )
          )
      )
    )

  constructor(private actions$: Actions,
    private store$: Store<TrendingBetsRacingState>,
    private service$: TrendingBetsService) { }
}
