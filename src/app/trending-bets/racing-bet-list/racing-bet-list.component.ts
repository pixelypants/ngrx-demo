import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { timer, Observable } from 'rxjs';
import { State } from "../trending-bets.reducer";
import { FetchRacingBets, FetchRacingBetsInit } from '../trending-bets.actions';
import * as betsSelectors from '../../reducers/index';
import { RacingBet } from '../models/trending-bets';

@Component({
  selector: 'racing-bet-list',
  animations: [],
  templateUrl: './racing-bet-list.component.html',
  styleUrls: ['./racing-bet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RacingBetListComponent implements OnInit {
  // racingBetsIds$: Observable<string[] | number[]>;
  racingBets$: Observable<RacingBet[]>;
  // isLoading$: Observable<boolean>;

  logging = false;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    // this.racingBetsIds$ = this.store.select(betsSelectors.selectTrendingBetsRacingIds);
    this.racingBets$ = this.store.select(betsSelectors.selectAllTrendingBetsRacing);
    // this.isLoading$ = this.store.select(selectIsRacingBetsLoading);

    this.store.dispatch(new FetchRacingBets());

    //const source = timer(0, 5000);
    //const subscribe = source.subscribe(_ => this.store.dispatch(new FetchRacingBets()));

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
