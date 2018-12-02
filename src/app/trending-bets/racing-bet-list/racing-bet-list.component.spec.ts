import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingBetListComponent } from './racing-bet-list.component';

describe('RacingBetListComponent', () => {
  let component: RacingBetListComponent;
  let fixture: ComponentFixture<RacingBetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacingBetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacingBetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
