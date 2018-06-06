import * as schoolDataReducer from './school-data-reducers';

export interface State {
    schoolData: schoolDataReducer.State;
}

export const reducers = {
    schoolData: schoolDataReducer
};