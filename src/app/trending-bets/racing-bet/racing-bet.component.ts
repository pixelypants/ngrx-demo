import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { RacingBet } from "../models/trending-bets";
import { State } from "../trending-bets.reducer";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent
} from '@angular/animations';
import { timer, Observable } from 'rxjs';
import * as betsSelectors from '../../reducers/index';

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
        animate('2.5s')
      ]),
    ]),
  ],
})
export class RacingBetComponent {
  @Input() id: string;
  // @Input() bet: RacingBet;

  // bet$: Observable<RacingBet>;
  bet$: RacingBet;
  isUpdated = false;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    // this.bet$ = this.store.select(betsSelectors.selectTrendingBetsRacingEntities).subscribe();
    this.store.select(betsSelectors.selectTrendingBetRacing(this.id)).subscribe(bet => this.bet$ = bet);
    //this.bet$.subscribe(bet => console.log(bet.propositionNumber))
    // this.bet$ = this.store.pipe(
    //   select(betsSelectors.selectTrendingBetRacing(this.id))
    // );
  }

  toggle() {
    this.isUpdated = !this.isUpdated;
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
