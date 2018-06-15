import { map, switchMap, mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { SchoolData } from '../../../shared/model/school-data';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import * as SchoolDataActions from '../actions/school-data-actions';
import { HideSpinner, ShowSpinner } from "../../shared/actions/spinner.actions";

type showSpinnerTypes =
     SchoolDataActions.LoadSchoolData
    | SchoolDataActions.LoadNationalData;

const showSpinnerActions = [
    SchoolDataActions.LOAD_NATIONAL_DATA,
    SchoolDataActions.LOAD_SCHOOL_DATA
]

type hideSpinnerTypes =
     SchoolDataActions.LoadNationalDataSuccess
    | SchoolDataActions.LoadSchoolDataSuccess;

const hideSpinnerActions = [
    SchoolDataActions.LOAD_SCHOOL_DATA_SUCCESS,
    SchoolDataActions.LOAD_NATIONAL_DATA_SUCCESS
]

@Injectable()
export class SchoolDataEffects {

    constructor (private actions$: Actions, private schoolDataService:SchoolDataService){}

    @Effect()
    showSpinner: Observable<Action> = this.actions$
        .ofType<SchoolDataActions.LoadData>(SchoolDataActions.LOAD_DATA)
        .pipe(map( _ => new ShowSpinner()));

    @Effect()
    hideSpinner: Observable<Action> = this.actions$
        .ofType<SchoolDataActions.LoadDataSuccess>(SchoolDataActions.LOAD_DATA_SUCCESS)
        .pipe(map( _ => new HideSpinner()));

    @Effect()
    retrieveData$: Observable<Action> = this.actions$.ofType<SchoolDataActions.LoadData>(SchoolDataActions.LOAD_DATA)
        .pipe(
            switchMap( _ => this.schoolDataService.getSchoolData()), //With Pipe() the value of this line will be pushed to the next line
            map((schoolData:SchoolData) => new SchoolDataActions.LoadSchoolDataSuccess(schoolData)),
            switchMap( _ => this.schoolDataService.getNationalSchoolData()), //With Pipe() the value of this line will be pushed to the next line
            map((nationalSchoolData:SchoolData) => new SchoolDataActions.LoadNationalDataSuccess(nationalSchoolData)),
            map( _ => new SchoolDataActions.LoadDataSuccess())
        );

    @Effect()
    retrieveSchoolData$: Observable<Action> = this.actions$.ofType<SchoolDataActions.LoadSchoolData>(SchoolDataActions.LOAD_SCHOOL_DATA)
        .pipe(
            switchMap( _ => this.schoolDataService.getSchoolData()), //With Pipe() the value of this line will be pushed to the next line
            map((schoolData:SchoolData) => new SchoolDataActions.LoadSchoolDataSuccess(schoolData))
        );

    @Effect()
    retrieveNationalSchoolData$: Observable<Action> = this.actions$.ofType<SchoolDataActions.LoadNationalData>(SchoolDataActions.LOAD_NATIONAL_DATA)
        .pipe(
            switchMap( _ => this.schoolDataService.getNationalSchoolData()), //With Pipe() the value of this line will be pushed to the next line
            map((nationalSchoolData:SchoolData) => new SchoolDataActions.LoadNationalDataSuccess(nationalSchoolData))
        );
}