import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

import * as fromStore from './state/school-data/reducers';
import * as SchoolDataActions from './state/school-data/actions/school-data-actions';
import { SchoolData } from './shared/model/school-data'

@Injectable()
export class AppGuard implements CanActivate {
    constructor(private store: Store<fromStore.SchoolDataState>) { }

    getFromStore(): Observable<any> {
        return this.store
            .select(fromStore.getLocalSchoolState)
            .do((data: any) => {
                if (!data) {
                    this.store.dispatch(new SchoolDataActions.LoadSchoolData);
                    this.store.dispatch(new SchoolDataActions.LoadNationalData);
                }
            })
            .map((data) => console.log(data))
            .take(1)
    }

    canActivate(): Observable<boolean> {
       return this.getFromStore()
        .switchMap(()=> of(true))
        .catch( _ => of(false))
    }

}