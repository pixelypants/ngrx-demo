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
        animate('0.5s')
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

  onAnimationEvent(event: AnimationEvent) {

    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is start or done
    console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 1000 or 1 second
    console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either open or closed
    console.warn(`From: ${event.fromState}`);

    // in our example, toState either open or closed
    console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }
}
