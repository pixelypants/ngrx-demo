import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BetSlipEffects } from './bet-slip.effects';

describe('BetSlipEffects', () => {
  let actions$: Observable<any>;
  let effects: BetSlipEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BetSlipEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(BetSlipEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
