import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { RacingBet } from "../models/trending-bets";
import { TrendingBetsRacingState } from "../trending-bets.reducer";
import {
  trigger,
  style,
  animate,
  transition,
  AnimationEvent
} from '@angular/animations';
import { __importDefault } from 'tslib';
import * as fromBetslipActions from "../../bet-slip/bet-slip.actions";

@Component({
  selector: 'racing-bet',
  templateUrl: './racing-bet.component.html',
  styleUrls: ['./racing-bet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('updatedData', [
      transition(':enter', [
        style({
          backgroundColor: 'yellow'
        }),
        animate('0.5s')
      ]),
    ]),
  ],
})
export class RacingBetComponent {
  @Input() id: string;
  @Input() bet: RacingBet;

  constructor(private store: Store<TrendingBetsRacingState>) { }

  ngOnInit() { }

  placeBet() {
    this.store.dispatch(new fromBetslipActions.AddSingleBet(this.id))
  }

  @Input() logging: boolean = false;
  onAnimationEvent(event: AnimationEvent) {
    if (!this.logging) {
      return
    }
    console.warn(`Animation Trigger: ${event.triggerName}`);
    console.warn(`Phase: ${event.phaseName}`);
    console.warn(`Total time: ${event.totalTime}`);
    console.warn(`From: ${event.fromState}`);
    console.warn(`To: ${event.toState}`);
    console.warn(`Element: ${event.element}`);
  }
}
