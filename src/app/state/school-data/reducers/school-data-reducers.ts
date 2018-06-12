import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { SchoolData } from '../../../shared/model/school-data';
import * as SchoolDataAction from '../actions/school-data-actions'; 
import {
     LOAD_SCHOOL_DATA_SUCCESS, LOAD_NATIONAL_DATA_SUCCESS, SchoolAction
} from "../actions/school-data-actions";

export interface State {
    schoolData: SchoolData;
    nationalSchoolData: SchoolData;
}

const initialState: State = {
    schoolData: undefined,
    nationalSchoolData: undefined
};

export function reducer(state: State = initialState, action: SchoolAction):State {
    switch(action.type){
        case LOAD_SCHOOL_DATA_SUCCESS:
            return Object.assign({}, state, {schoolData: action.payload});
        case LOAD_NATIONAL_DATA_SUCCESS:
            return Object.assign({}, state, {nationalSchool: action.payload});
        default: {
            return state;
        }  
    }
}

export const getSchoolData = (state: State) => state.schoolData;
export const getNationalSchoolData = (state: State) => state.nationalSchoolData;