import { Component, OnInit } from '@angular/core';

import { SchoolData, DataField } from '../shared/model/school-data'; 
import { SchoolDataService } from '../shared/services/school-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private schoolDataService: SchoolDataService) { }

  localSchoolData: SchoolData;
  schoolData: DataField[];
  nationalSchoolData: SchoolData;

  ngOnInit() {
    this.getSchoolData();
  }

  getSchoolData(): void {
    this.schoolDataService.getSchoolData()
      .subscribe(schoolData => {
        this.localSchoolData = schoolData;
        this.schoolData = this.localSchoolData.schoolData;
        //this.nationalSchoolData = schoolData[1];
      })
  }

}
