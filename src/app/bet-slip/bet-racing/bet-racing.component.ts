import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromTrendingBets from "../../trending-bets/trending-bets.reducer";
import { RacingBet } from "../../trending-bets/models/trending-bets";
import * as fromBetslipActions from "../../bet-slip/bet-slip.actions";

@Component({
  selector: 'bet-racing',
  templateUrl: './bet-racing.component.html',
  styleUrls: ['./bet-racing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BetRacingComponent implements OnInit {
  @Input() id: string;
  @Input() bet$: Observable<RacingBet>;

  constructor(private store: Store<fromTrendingBets.TrendingBetsRacingState>) { }

  removeBet() {
    this.store.dispatch(new fromBetslipActions.RemoveSingleBet(this.id.toString()))
  }
  ngOnInit() {
    this.bet$ = this.store.select(fromTrendingBets.selectTrendingBetRacingById(this.id));
  }

}
