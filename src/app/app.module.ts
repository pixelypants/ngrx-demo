import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { TrendingBetsModule } from "./trending-bets/trending-bets.module";
import { BetSlipModule } from "./bet-slip/bet-slip.module";
import { MatGridList } from '@angular/material/grid-list';

//For InMemory testing 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './app-test-data-db';

// Normalise state
// https://www.youtube.com/watch?v=pffEkpuZpPo

// @ngrx/entity
// https://blog.angular-university.io/ngrx-entity/

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    // MatGridList,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    InMemoryWebApiModule.forRoot(TestData, { delay: 1500 }),
    TrendingBetsModule,
    BetSlipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
