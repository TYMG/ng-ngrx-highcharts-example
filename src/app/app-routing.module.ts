import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppGuard } from './app.guard'

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartBarComponent } from './highchart-bar/highchart-bar.component';
import { HighchartMapComponent } from './highchart-map/highchart-map.component';
import { SesDisadvantagedComponent } from './ses-disadvantaged/ses-disadvantaged.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'chart/bar', component: HighchartBarComponent },
  { path: 'chart/map', component: HighchartMapComponent },
  { path: 'ses-disadvantaged', component: SesDisadvantagedComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

