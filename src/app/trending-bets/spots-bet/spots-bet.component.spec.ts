import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotsBetComponent } from './spots-bet.component';

describe('SpotsBetComponent', () => {
  let component: SpotsBetComponent;
  let fixture: ComponentFixture<SpotsBetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotsBetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotsBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
