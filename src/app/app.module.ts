import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

import * as fromSchoolData from './state/school-data/reducers';
//import { reducers } from './state/school-data/reducers/index';
import { SchoolDataEffects } from './state/school-data/effects/school-data-effects';
import { MaterialModule } from './shared/components/material.module';
import { StateModule } from './state/state.module';
import { AppRoutingModule } from './app-routing.module';

import { NavbarModule } from './shared/components/navbar/navbar.module';

import { AppGuard } from './app.guard';
import { AppComponent } from './app.component';
import { HighchartMapComponent } from './highchart-map/highchart-map.component';
import { SesDisadvantagedComponent } from './ses-disadvantaged/ses-disadvantaged.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartBarComponent } from './highchart-bar/highchart-bar.component';
import { DataCardComponent } from './shared/components/data-card/data-card.component';
import { appReducer, appMetaReducers } from './state/app.reducer';
import { MapChartComponent } from './shared/components/charts/map-chart/map-chart.component';
import { FooterModule } from './shared/components/footer/footer.module';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    HighchartMapComponent,
    SesDisadvantagedComponent,
    DashboardComponent,
    HighchartBarComponent,
    DataCardComponent,
    MapChartComponent,
    HomeComponent
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
    FlexLayoutModule,
    MaterialModule,
    NavbarModule,
    AppRoutingModule,
    StateModule,
    FooterModule/*,
    StoreModule.forRoot(appReducer, { metaReducers: appMetaReducers }),
    StoreModule.forFeature('schoolData', fromSchoolData.reducers),
    EffectsModule.forRoot([SchoolDataEffects])*/

  ],
  providers: [AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
