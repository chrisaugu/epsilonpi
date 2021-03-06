import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDetailComponent } from './track-detail.component';

describe('TrackListComponent', () => {
  let component: TrackDetailComponent;
  let fixture: ComponentFixture<TrackDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
