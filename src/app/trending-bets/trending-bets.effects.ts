import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from './trending-bets.reducer';
import { TrendingBetsService } from './trending-bets.service';
import {
  FetchRacingBets,
  FetchRacingBetsError,
  FetchRacingBetsAddAll,
  FetchRacingBetsAddMany,
  FetchRacingBetsDeleteMany,
  FetchRacingBetsUpdateMany,
  RacingBetActionTypes,
  RacingBetActions
} from './trending-bets.actions';
import { Observable, of, timer } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, repeat, distinct, tap } from 'rxjs/operators';
import { RacingBetResponse, RacingBet } from "./models/trending-bets";
import * as fromReducerIndex from "../reducers/index";

@Injectable()
export class RacingBetEffects {

  @Effect()
  //  fetch$: Observable<RacingBetActions> = this.actions$
  fetch$ = this.actions$
    .ofType(RacingBetActionTypes.FetchRacingBets)
    .pipe(
      withLatestFrom(this.store$.select(fromReducerIndex.selectRacingBetsState)),
      switchMap(([action, state]) =>
        this.service$.getRacingBets().pipe(
          tap(result => console.warn("XXXXXX: " + result + " <<<>>> " + state)),
          map(result => {
            if (state.ids.length < 1) {
              return new FetchRacingBetsAddAll(result)
            }
            else {
              result.filter(bet => {
                // var rtn = state.ids.findIndex()
                //var rtn = state.ids.findIndex(y => y.propositionNumber === bet.propositionNumber);
                console.log("xxxx")
                //.findIndex(storeBet => storeBet.propositionNumber === bet.propositionNumber);
                // console.log("Is bet in store: " + rtn);
                //return (rtn => 0);
                // new FetchRacingBetsUpdateMany());
              })

            }
          }),
          // map(results => {
          //   console.warn("XXXXXX: " + state.trendingBetsRacing.length),
          //     // if (state.trendingBetsRacing.length <= 0) {
          //     //new FetchRacingBetsAddAll(results)),
          //     // }
          //     // else {
          //     //   new FetchRacingBetsUpdateMany(results.filter(bet => {
          //     //     var rtn = state.trendingBetsRacing.findIndex(storeBet => storeBet.propositionNumber === bet.propositionNumber);
          //     //     console.log("Is bet in store: " + rtn);
          //     //     return (rtn => 0);
          //     //   }));
          //     // }
          //     //}),
          //     // switchmapp on return
          //     // 1) Call Update action - with filtered items that are already in the store
          //     // 2) Call Delete action - with unique items in the state that are not in the payload
          //     // 3) Call Create action - with unique items in the payload that are not in the store
          // )
          catchError(err => of(new FetchRacingBetsError(err))
          )
        )
      )
    );

  constructor(private actions$: Actions,
    private store$: Store<State>,
    private service$: TrendingBetsService) { }
}
