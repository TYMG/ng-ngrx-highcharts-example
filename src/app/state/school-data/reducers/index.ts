import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppState } from "../../app.interface";

import * as schoolDataReducer from './school-data-reducers';

export interface SchoolDataState {
     schoolData: schoolDataReducer.State;
}

export const reducers = {
    schoolData: schoolDataReducer.reducer
};

export const getSchoolDataState = createFeatureSelector<schoolDataReducer.State>('schoolData');

export const getLocalSchoolState = createSelector (
    getSchoolDataState,
    schoolDataReducer.getSchoolData
);

