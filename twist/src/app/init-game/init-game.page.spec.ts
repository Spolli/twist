import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitGamePage } from './init-game.page';

describe('InitGamePage', () => {
  let component: InitGamePage;
  let fixture: ComponentFixture<InitGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
