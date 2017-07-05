import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinboxComponent } from './userinbox.component';

describe('UserinboxComponent', () => {
  let component: UserinboxComponent;
  let fixture: ComponentFixture<UserinboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
