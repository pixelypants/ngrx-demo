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
    this.racingBets$ = this.store.select(selectAllTrendingBetsRacing);
    this.isLoading$ = this.store.select(selectTrendingBetRacingLoading);

    this.store.dispatch(new FetchRacingBetsInit());

    const source = timer(5000, 50000);
    const subscribe = source.subscribe(() => this.store.dispatch(new FetchRacingBets()));
  }
}
