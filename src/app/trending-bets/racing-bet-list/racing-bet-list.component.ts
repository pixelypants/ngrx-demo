import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { timer, Observable } from 'rxjs';
import { TrendingBetsRacingState, selectTrendingBetsRacingEntities, selectTrendingBetRacingLoading, selectAllTrendingBetsRacing, selectTrendingBetRacingInitLoaded } from "../trending-bets.reducer";
import { FetchRacingBets, FetchRacingBetsInit, FetchRacingBetsAddMany } from '../trending-bets.actions';
import { RacingBet } from '../models/trending-bets';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'racing-bet-list',
  animations: [],
  templateUrl: './racing-bet-list.component.html',
  styleUrls: ['./racing-bet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RacingBetListComponent implements OnInit {
  racingBets$: Observable<RacingBet[]>;
  isLoading$: Observable<boolean>;

  logging = false;

  constructor(private store: Store<TrendingBetsRacingState>) { }

  ngOnInit() {
    // this.store.select(selectTrendingBetRacingInitLoaded).pipe(
    //   tap(() => {
    //     console.log("<===========>");
    //     const source = timer(0, 5000);
    //     const subscribe = source.subscribe(_ => this.store.dispatch(new FetchRacingBets()));
    //   }))
    this.racingBets$ = this.store.select(selectAllTrendingBetsRacing);
    this.isLoading$ = this.store.select(selectTrendingBetRacingLoading).pipe(
      tap((x) => {
        console.log("<===========>");
        // const source = timer(0, 5000);
        // const subscribe = source.subscribe(_ => this.store.dispatch(new FetchRacingBets()));
      }));
    this.store.dispatch(new FetchRacingBetsInit());

    const source = timer(20000, 60000);
    const subscribe = source.subscribe(() => this.store.dispatch(new FetchRacingBets()));

    // Need to find a way to manage smart updating
    // const source = timer(0, 5000);
    // const subscribe = source.subscribe(_ => this.store.dispatch(new FetchRacingBets()));

    // Lynda.com tut up to here
    // https://toddmotto.com/ngrx-store-understanding-state-selectors
  }

  // trackBet(index, bet) {
  //   console.log(index + " ::: " + bet.propositionNumber);
  //   var temp = bet ? bet.propositionNumber : undefined;
  //   // console.log(" >>>>> " + temp);
  //   return temp;
  // }
}
