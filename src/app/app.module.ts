import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SesDisadvantagedComponent } from './ses-disadvantaged/ses-disadvantaged.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SesDisadvantagedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
