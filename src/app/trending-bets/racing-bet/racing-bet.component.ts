import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { RacingBet } from "../models/trending-bets";

@Component({
  selector: 'swkb-racing-bet',
  templateUrl: './racing-bet.component.html',
  styleUrls: ['./racing-bet.component.css']
})
export class RacingBetComponent {
  @Input() racingBet: RacingBet;
}
