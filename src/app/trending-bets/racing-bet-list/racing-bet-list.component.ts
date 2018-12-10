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
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   AnimationEvent
// } from '@angular/animations';
import { RacingBet } from '../models/trending-bets';

@Component({
  selector: 'racing-bet-list',
  animations: [
    // trigger('openClose', [
    //   state('open', style({
    //     backgroundColor: 'yellow'
    //   })),
    //   state('closed', style({
    //     backgroundColor: 'green'
    //   })),
    //   transition('* => *', [
    //     animate('1000ms 500ms ease-in', style({ backgroundColor: 'blue' }))
    //   ]),
    // ]),
    // trigger('openClose', [
    //   state('open', style({
    //     height: '200px',
    //     opacity: 1,
    //     backgroundColor: 'yellow'
    //   })),
    //   state('closed', style({
    //     height: '100px',
    //     opacity: 0.5,
    //     backgroundColor: 'green'
    //   })),
    //   transition('open => closed', [
    //     animate('1s')
    //   ]),
    //   transition('closed => open', [
    //     animate('0.5s')
    //   ]),
    //   transition('* => closed', [
    //     animate('1s')
    //   ]),
    //   transition('* => open', [
    //     animate('0.5s')
    //   ]),
    //   transition('open <=> closed', [
    //     animate('0.5s')
    //   ]),
    //   transition('* => open', [
    //     animate('1s',
    //       style({ opacity: '*' }),
    //     ),
    //   ]),
    //   transition('* => *', [
    //     animate('1s')
    //   ]),
    // ]),
  ],
  templateUrl: './racing-bet-list.component.html',
  styleUrls: ['./racing-bet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RacingBetListComponent implements OnInit {
  racingBets$: Observable<RacingBet[]>;
  isLoading$: Observable<boolean>;

  // isOpen = false;

  // toggle() {
  //   console.log("toggle clicked");
  //   this.isOpen = !this.isOpen;
  // }

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.racingBets$ = this.store.select(getRacingBets);
    this.isLoading$ = this.store.select(getIsRacingBetsLoading);
    const source = timer(0, 5000);
    const subscribe = source.subscribe(_ => this.store.dispatch(new FetchRacingBets()));

    // Lynda.com tut up to here
    // https://toddmotto.com/ngrx-store-understanding-state-selectors
  }

  trackBet(index, bet) {
    // console.log(index + " ::: " + bet.propositionNumber);
    var temp = bet ? bet.propositionNumber : undefined;
    // console.log(" >>>>> " + temp);
    return temp;
  }

  // onAnimationEvent(event: AnimationEvent) {

  //   // openClose is trigger name in this example
  //   console.warn(`Animation Trigger: ${event.triggerName}`);

  //   // phaseName is start or done
  //   console.warn(`Phase: ${event.phaseName}`);

  //   // in our example, totalTime is 1000 or 1 second
  //   console.warn(`Total time: ${event.totalTime}`);

  //   // in our example, fromState is either open or closed
  //   console.warn(`From: ${event.fromState}`);

  //   // in our example, toState either open or closed
  //   console.warn(`To: ${event.toState}`);

  //   // the HTML element itself, the button in this case
  //   console.warn(`Element: ${event.element}`);
  // }
}
