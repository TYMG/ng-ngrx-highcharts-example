import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SesDisadvantagedComponent } from './ses-disadvantaged/ses-disadvantaged.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartBarComponent } from './highchart-bar/highchart-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SesDisadvantagedComponent,
    DashboardComponent,
    HighchartBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
