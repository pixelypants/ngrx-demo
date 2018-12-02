import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacingBetComponent } from './racing-bet/racing-bet.component';
import { SpotsBetComponent } from './spots-bet/spots-bet.component';
import { RacingBetListComponent } from './racing-bet-list/racing-bet-list.component';

@NgModule({
  declarations: [RacingBetComponent, SpotsBetComponent, RacingBetListComponent],
  imports: [
    CommonModule
  ]
})
export class TrendingBetsModule { }
