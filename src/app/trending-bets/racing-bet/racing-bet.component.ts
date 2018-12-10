import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RacingBet } from "../models/trending-bets";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent
} from '@angular/animations';

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
  @Input() bet: RacingBet;

  isUpdated = false;

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
