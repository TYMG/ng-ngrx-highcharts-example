import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

import { StoreModule } from '@ngrx/store';
import * as fromSchoolData from './state/school-data/reducers';
//import { reducers } from './state/school-data/reducers/index';

import { EffectsModule } from '@ngrx/effects';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SchoolDataEffects } from './state/school-data/effects/school-data-effects';
import { MaterialModule } from './material.module';
import { StateModule } from './state/state.module';
import { AppRoutingModule } from './app-routing.module';
import { AppGuard } from './app.guard';
import { AppComponent } from './app.component';
import { HighchartMapComponent } from './highchart-map/highchart-map.component';
import { SesDisadvantagedComponent } from './ses-disadvantaged/ses-disadvantaged.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartBarComponent } from './highchart-bar/highchart-bar.component';
import { DataCardComponent } from './shared/components/data-card/data-card.component';
import { appReducer, appMetaReducers } from './state/app.reducer';
import { MapChartComponent } from './shared/components/charts/map-chart/map-chart.component'

@NgModule({
  declarations: [
    AppComponent,
    HighchartMapComponent,
    SesDisadvantagedComponent,
    DashboardComponent,
    HighchartBarComponent,
    DataCardComponent,
    MapChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    ),
    MaterialModule,
    AppRoutingModule,
    StateModule/*,
    StoreModule.forRoot(appReducer, { metaReducers: appMetaReducers }),
    StoreModule.forFeature('schoolData', fromSchoolData.reducers),
    EffectsModule.forRoot([SchoolDataEffects])*/

  ],
  providers: [AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
