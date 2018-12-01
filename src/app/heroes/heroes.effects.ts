import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HeroesActionTypes } from './heroes.actions';

@Injectable()
export class HeroesEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(HeroesActionTypes.LoadHeroess));

  constructor(private actions$: Actions) {}
}
