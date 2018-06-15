import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { SchoolData, DataField } from '../shared/model/school-data';
import { SchoolDataService } from '../shared/services/school-data.service';
import * as SchoolDataActions from '../state/school-data/actions/school-data-actions';
import * as fromStore from '../state/school-data/reducers';
import { isSpinnerShowing } from '../state/shared/reducers'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  localSchoolData: SchoolData;
  schoolData: DataField[];
  nationalSchoolData: SchoolData;
  localSchoolData$: Observable<SchoolData>;
  loading$: Observable<boolean>;


  constructor(private localStore: Store<fromStore.SchoolDataState>) {
    //this.localSchoolData$ = this.localStore.select(fromStore.getLocalSchoolState);
    this.loading$ = localStore.pipe(select(isSpinnerShowing));
    this.localSchoolData$ = localStore.pipe(select(fromStore.getLocalSchoolState)) as Observable<SchoolData>;

/*    this.localSchoolData$.subscribe(data => {
       this.schoolData = data.schoolData
    });*/
    console.log(this.localSchoolData$);
    // this.localStore.pipe(
    //   select(fromStore.getLocalSchoolState),
    //   map((retrieveSchoolData) => {
    //     console.log(retrieveSchoolData);
    //     return null;
    //   }));
    this.localStore.pipe(
      select(fromStore.getSchoolDataField),
      map((retrievedSchoolDataField: DataField[]) => this.schoolData = retrievedSchoolDataField));
  }

  ngOnInit() {
    // this.localStore.pipe(
    //   select(fromStore.getLocalSchoolState),
    //   map((retrieveSchoolData: SchoolData) => this.localSchoolData = retrieveSchoolData));
    
  }
}
