import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';
import { Store,select } from '@ngrx/store';

import { SchoolData, DataField } from '../shared/model/school-data'; 
import { SchoolDataService } from '../shared/services/school-data.service';
import * as SchoolDataActions from '../state/school-data/actions/school-data-actions';
import * as fromStore from '../state/school-data/reducers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store<fromStore.SchoolDataState>) { 
    this.localStore = store;
  }

  private localStore: Store<fromStore.SchoolDataState>;
  localSchoolData: SchoolData;
  schoolData: DataField[];
  nationalSchoolData: SchoolData;

  ngOnInit() {
    this.localStore.pipe(
       select(fromStore.getLocalSchoolState),
       map((retrieveSchoolData : SchoolData) => this.localSchoolData = retrieveSchoolData),
    );
  }

}
