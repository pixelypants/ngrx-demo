import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RacingBetResponse, RacingBet } from './models/trending-bets';

@Injectable()
export class TrendingBetsService {
  // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
  private proxyurl = "https://cors-anywhere.herokuapp.com/";
  private readonly baseUrl = 'https://api.beta.tab.com.au/v1/trending-bets-service/';

  constructor(private http: HttpClient) { }

  getRacingBets(): Observable<RacingBet[]> {
    const options = {
      params: {}
    };
    const link = `${this.proxyurl}${this.baseUrl}propositions-racing?jurisdiction=NSW`;

    return this.http.get<RacingBet[]>(link, options);
  }

  getRacingBets_mocked(url: string): Observable<RacingBet[]> {
    const options = {
      params: {}
    };
    return this.http.get<RacingBet[]>(url, options);
  }
}
