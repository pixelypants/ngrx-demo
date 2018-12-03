import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RacingBetEffects } from './trending-bets.effects';

describe('RacingBetEffects', () => {
  let actions$: Observable<any>;
  let effects: RacingBetEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RacingBetEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(RacingBetEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
