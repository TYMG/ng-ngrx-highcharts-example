import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as SchoolDataActions from './state/school-data/actions/school-data-actions';
import * as fromRoot from './state/school-data/reducers/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constuctor(private store: Store<fromRoot.State>){
    this.store.dispatch(new SchoolDataActions.LoadSchoolData());
  }
}
