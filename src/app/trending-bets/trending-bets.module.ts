import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RacingBetComponent } from './racing-bet/racing-bet.component';
import { SpotsBetComponent } from './spots-bet/spots-bet.component';
import { RacingBetListComponent } from './racing-bet-list/racing-bet-list.component';
import { EffectsModule } from '@ngrx/effects';
import { RacingBetEffects } from './trending-bets.effects';
import { TrendingBetsService } from "./trending-bets.service";
@NgModule({
  declarations: [RacingBetComponent, SpotsBetComponent, RacingBetListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    EffectsModule.forFeature([RacingBetEffects])
  ],
  providers: [
    TrendingBetsService
  ],
  exports: [
    RacingBetListComponent
  ]
})
export class TrendingBetsModule { }
