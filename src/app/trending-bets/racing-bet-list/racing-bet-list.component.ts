import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { timer, Observable } from 'rxjs';
import { State } from "../trending-bets.reducer";
import { FetchRacingBets } from '../trending-bets.actions';
import {
  getRacingBets,
  getIsRacingBetsLoading,
  getRacingBetsState
} from '../../reducers/index';
import { RacingBet } from '../models/trending-bets';

@Component({
  selector: 'racing-bet-list',
  templateUrl: './racing-bet-list.component.html',
  styleUrls: ['./racing-bet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RacingBetListComponent implements OnInit {
  racingBets$: Observable<RacingBet[]>;
  isLoading$: Observable<boolean>;
  test$: Observable<string>;

  constructor(private store: Store<State>) {
    // store.select(getRacingBets).subscribe(data => this.racingBets$ = data)
  }

  ngOnInit() {
    this.racingBets$ = this.store.select(getRacingBets);
    this.isLoading$ = this.store.select(getIsRacingBetsLoading);

    // this.store.select(getRacingBetsState)
    //   .subscribe(bets => { this.test$ = bets.test; console.log(">>>>>>" + this.racingBets$) });

    const source = timer(0, 5000);
    const subscribe = source.subscribe(_ => this.store.dispatch(new FetchRacingBets()));

    // Lynda.com tut up to here
    // https://toddmotto.com/ngrx-store-understanding-state-selectors
  }
}
