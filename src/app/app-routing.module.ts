import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppGuard } from './app.guard'

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './report/dashboard/dashboard.component';
import { HighchartBarComponent } from './highchart-bar/highchart-bar.component';
import { HighchartMapComponent } from './highchart-map/highchart-map.component';
import { SesDisadvantagedComponent } from './report/ses-disadvantaged/ses-disadvantaged.component';
import { AggregateReportComponent } from './report/aggregate-report/aggregate-report.component';
import { SummaryReportComponent } from './report/summary-report/summary-report.component';

const routes: Routes = [
  { path: 'chart/bar', component: HighchartBarComponent },
  { path: 'chart/map', component: HighchartMapComponent },
  { path: 'reports/dashboard', component: DashboardComponent },
  { path: 'reports/ses-disadvantaged', component: SesDisadvantagedComponent },
  { path: 'reports/aggregate', component: AggregateReportComponent },
  { path: 'reports/summary', component: SummaryReportComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

