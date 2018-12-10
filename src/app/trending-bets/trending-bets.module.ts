import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule, } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RacingBetComponent } from './racing-bet/racing-bet.component';
import { RacingBetListComponent } from './racing-bet-list/racing-bet-list.component';
import { EffectsModule } from '@ngrx/effects';
import { RacingBetEffects } from './trending-bets.effects';
import { TrendingBetsService } from "./trending-bets.service";

@NgModule({
  declarations: [
    RacingBetComponent,
    RacingBetListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
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
