import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


import * as SchoolDataActions from './state/school-data/actions/school-data-actions';
//import * as fromRoot from './state/school-data/reducers/index';
import { SchoolDataState } from './state/school-data/reducers';
import * as fromStore from './state/shared/reducers';
import { isSpinnerShowing } from './state/shared/reducers'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //loading$: Observable<boolean>;


  constructor(private store: Store<SchoolDataState>) {
  /*  this.store.dispatch(new SchoolDataActions.LoadData);
    this.loading$ = store.pipe(select(isSpinnerShowing));
*/
    //this.store.dispatch(new SchoolDataActions.LoadNationalData);
  }
}
