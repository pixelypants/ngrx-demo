import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BetSlipActionTypes } from './bet-slip.actions';

@Injectable()
export class BetSlipEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(BetSlipActionTypes.LoadBetSlips));

  constructor(private actions$: Actions) {}
}
