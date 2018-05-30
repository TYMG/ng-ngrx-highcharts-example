import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartBarComponent } from './highchart-bar/highchart-bar.component';
import { MapComponent } from './map/map.component';
import { SesDisadvantagedComponent } from './ses-disadvantaged/ses-disadvantaged.component';

 const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'map/bar', component: HighchartBarComponent },
  { path: 'ses-disadvantaged', component: SesDisadvantagedComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

 