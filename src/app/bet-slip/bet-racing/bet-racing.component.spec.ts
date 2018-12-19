import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetRacingComponent } from './bet-racing.component';

describe('BetRacingComponent', () => {
  let component: BetRacingComponent;
  let fixture: ComponentFixture<BetRacingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetRacingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetRacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
