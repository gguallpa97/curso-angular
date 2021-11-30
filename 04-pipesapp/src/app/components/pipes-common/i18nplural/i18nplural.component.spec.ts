import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18npluralComponent } from './i18nplural.component';

describe('I18npluralComponent', () => {
  let component: I18npluralComponent;
  let fixture: ComponentFixture<I18npluralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18npluralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18npluralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
