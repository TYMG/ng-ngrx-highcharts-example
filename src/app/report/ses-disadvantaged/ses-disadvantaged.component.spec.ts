import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesDisadvantagedComponent } from './ses-disadvantaged.component';

describe('SesDisadvantagedComponent', () => {
  let component: SesDisadvantagedComponent;
  let fixture: ComponentFixture<SesDisadvantagedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesDisadvantagedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesDisadvantagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
