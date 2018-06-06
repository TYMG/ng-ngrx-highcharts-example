import { Action } from "@ngrx/store";
import { SchoolData } from '../../../shared/model/school-data';
import { createActionType } from "../../shared/utils";


//CreateActionType function ensures that your actions type strings are unique.
export const LOAD_SCHOOL_DATA = createActionType('LOAD_SCHOOL_DATA');
export const LOAD_SCHOOL_DATA_SUCCESS = createActionType('LOAD_SCHOOL_DATA_SUCCESS');

export const LOAD_NATIONAL_DATA = createActionType('LOAD_NATIONAL_DATA');
export const LOAD_NATIONAL_DATA_SUCCESS = createActionType('LOAD_NATIONAL_DATA_SUCCESS');

export class LoadSchoolData implements Action {
    readonly type = LOAD_SCHOOL_DATA;
}

export class LoadSchoolDataSuccess implements Action {
    readonly type = LOAD_SCHOOL_DATA_SUCCESS;

    constructor(public payload: SchoolData){}
}

export class LoadNationalData implements Action {
    readonly type = LOAD_NATIONAL_DATA;
}

export class LoadNationalDataSuccess implements Action {
    readonly type = LOAD_NATIONAL_DATA_SUCCESS;

    constructor(public payload: SchoolData){}
}

export type SchoolAction = 
LoadSchoolData
| LoadSchoolDataSuccess
| LoadNationalData
| LoadNationalDataSuccess;