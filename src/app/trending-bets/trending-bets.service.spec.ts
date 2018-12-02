import { TestBed } from '@angular/core/testing';

import { TrendingBetsService } from './trending-bets.service';

describe('TrendingBetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrendingBetsService = TestBed.get(TrendingBetsService);
    expect(service).toBeTruthy();
  });
});
