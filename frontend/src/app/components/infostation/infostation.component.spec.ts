import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfostationComponent } from './infostation.component';

describe('InfostationComponent', () => {
  let component: InfostationComponent;
  let fixture: ComponentFixture<InfostationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfostationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfostationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
