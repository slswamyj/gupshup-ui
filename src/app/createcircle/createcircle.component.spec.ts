import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecircleComponent } from './createcircle.component';

describe('CreatecircleComponent', () => {
  let component: CreatecircleComponent;
  let fixture: ComponentFixture<CreatecircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
