import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { RouterStateSerializer, StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { appMetaReducers, appReducer } from "./app.reducer";
import * as fromSchoolData from './school-data/reducers/school-data-reducers';
import { AppEffects } from './app.effects';
import { SchoolDataEffects } from './school-data/effects/school-data-effects';
import { environment } from '../../environments/environment'; // Angular CLI environemnt
import { CustomSerializer } from "./shared/utils";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot( appReducer, {
      metaReducers: appMetaReducers
    }),
    StoreModule.forFeature('schoolData', fromSchoolData.reducer),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      AppEffects,
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: []
})

export class StateModule {

  constructor( @Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        {
          provide: RouterStateSerializer,
          useClass: CustomSerializer
        }
      ]
    };
  }

}
