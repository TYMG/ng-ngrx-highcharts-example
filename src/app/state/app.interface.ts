import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './shared/utils';

import * as fromSpinner from "./shared/reducers/spinner.reducer"

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  spinner: fromSpinner.State;
}