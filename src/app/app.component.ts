import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as SchoolDataActions from './state/school-data/actions/school-data-actions';
//import * as fromRoot from './state/school-data/reducers/index';
import { SchoolDataState } from './state/school-data/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store<SchoolDataState>) {
    this.store.dispatch(new SchoolDataActions.LoadSchoolData);
    this.store.dispatch(new SchoolDataActions.LoadNationalData);
  }
}
