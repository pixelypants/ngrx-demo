import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetSlipComponent } from './bet-slip/bet-slip.component';
import { BetRacingComponent } from './bet-racing/bet-racing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule, } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EffectsModule } from '@ngrx/effects';
import { BetSlipEffects } from "./bet-slip.effects";

@NgModule({
  declarations: [
    BetSlipComponent,
    BetRacingComponent
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
    EffectsModule.forFeature([BetSlipEffects])
  ],
  providers: [
    //
  ],
  exports: [
    BetSlipComponent
  ]
})
export class BetSlipModule { }
