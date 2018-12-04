import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from "../trending-bets.reducer";
import { FetchRacingBets } from '../trending-bets.actions';
import {
  getRacingBets,
  getIsRacingBetsLoading,
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

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.racingBets$ = this.store.select(getRacingBets);
    this.isLoading$ = this.store.select(getIsRacingBetsLoading);

    this.store.dispatch(new FetchRacingBets());
  }
}
