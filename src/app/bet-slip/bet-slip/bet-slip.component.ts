import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromBetSlipState from "../bet-slip.reducer";

@Component({
  selector: 'bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {
  singleBets$: Observable<string[]>;

  constructor(private store: Store<fromBetSlipState.BetslipState>) { }

  ngOnInit() {
    this.singleBets$ = this.store.select(fromBetSlipState.getSingleBetIds);
    console.log('------------');
  }

}
