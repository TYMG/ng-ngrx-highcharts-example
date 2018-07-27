import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';


import { MaterialModule } from '../shared/components/material.module';

import { SesDisadvantagedComponent } from './ses-disadvantaged/ses-disadvantaged.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryReportComponent } from './summary-report/summary-report.component';
import { AggregateReportComponent } from './aggregate-report/aggregate-report.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    SesDisadvantagedComponent,
    DashboardComponent,
    SummaryReportComponent,
    AggregateReportComponent
  ],
  exports: [
    SesDisadvantagedComponent,
    DashboardComponent,
    SummaryReportComponent,
    AggregateReportComponent
  ]
})
export class ReportModule { }
