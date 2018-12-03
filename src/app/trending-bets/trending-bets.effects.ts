import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from './trending-bets.reducer';
import { TrendingBetsService } from './trending-bets.service';
import {
  FetchRacingBets,
  FetchRacingBetsError,
  FetchRacingBetsSuccess,
  RacingBetActionTypes,
  RacingBetActions
} from './trending-bets.actions';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class RacingBetEffects {
  @Effect()
  fetch$: Observable<RacingBetActions> = this.actions$
    .ofType(RacingBetActionTypes.FetchRacingBets)
    .pipe(
      withLatestFrom(this.store),
      switchMap(([action, state]) =>
        this.service.getRacingBets().pipe(
          map(data => new FetchRacingBetsSuccess(data)),
          catchError(err => of(new FetchRacingBetsError(err)))
        )
      )
    );

  constructor(private actions$: Actions,
    private store: Store<State>,
    private service: TrendingBetsService) { }
}
