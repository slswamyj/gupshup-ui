import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleInboxComponent } from './circleinbox.component';

describe('CircleinboxComponent', () => {
  let component: CircleInboxComponent;
  let fixture: ComponentFixture<CircleInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
