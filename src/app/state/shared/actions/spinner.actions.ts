import { Action } from "@ngrx/store";
import { createActionType } from "../utils";

//CreateActionType function ensures that your actions type strings are unique.
export const SHOW_SPINNER = createActionType('SHOW_SPINNER');
export const HIDE_SPINNER = createActionType('HIDE_SPINNER');

export class ShowSpinner implements Action {
    readonly type = SHOW_SPINNER;
}

export class HideSpinner implements Action {
    readonly type = HIDE_SPINNER;
}

export type SpinnerAction = ShowSpinner | HideSpinner;