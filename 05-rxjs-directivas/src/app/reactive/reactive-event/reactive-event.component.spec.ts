import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveEventComponent } from './reactive-event.component';

describe('ReactiveEventComponent', () => {
  let component: ReactiveEventComponent;
  let fixture: ComponentFixture<ReactiveEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
