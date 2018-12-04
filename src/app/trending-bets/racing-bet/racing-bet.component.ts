import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { RacingBet } from "../models/trending-bets";

@Component({
  selector: 'racing-bet',
  templateUrl: './racing-bet.component.html',
  styleUrls: ['./racing-bet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RacingBetComponent {
  @Input() bet: RacingBet;
}
