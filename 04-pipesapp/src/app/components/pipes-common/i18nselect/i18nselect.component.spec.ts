import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nselectComponent } from './i18nselect.component';

describe('I18nselectComponent', () => {
  let component: I18nselectComponent;
  let fixture: ComponentFixture<I18nselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
