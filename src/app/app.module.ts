import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

import { StoreModule } from '@ngrx/store';
import { reducers } from './state/school-data/reducers/index';

import { EffectsModule } from '@ngrx/effects';
import { SchoolDataEffects } from './state/school-data/effects/school-data-effects';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StateModule } from './state/state.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SesDisadvantagedComponent } from './ses-disadvantaged/ses-disadvantaged.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartBarComponent } from './highchart-bar/highchart-bar.component';
import { DataCardComponent } from './shared/components/data-card/data-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SesDisadvantagedComponent,
    DashboardComponent,
    HighchartBarComponent,
    DataCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MaterialModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([SchoolDataEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
