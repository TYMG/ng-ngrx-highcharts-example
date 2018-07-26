import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateReportComponent } from './aggregate-report.component';

describe('AggregateReportComponent', () => {
  let component: AggregateReportComponent;
  let fixture: ComponentFixture<AggregateReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
