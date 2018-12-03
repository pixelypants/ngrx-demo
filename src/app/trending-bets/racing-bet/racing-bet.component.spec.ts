import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingBetComponent } from './racing-bet.component';

describe('RacingBetComponent', () => {
  let component: RacingBetComponent;
  let fixture: ComponentFixture<RacingBetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RacingBetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacingBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
