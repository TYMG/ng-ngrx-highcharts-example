import { Component, OnInit } from '@angular/core';

import { SchoolData } from '../shared/model/school-data'; 
import { SchoolDataService } from '../shared/services/school-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private schoolDataService: SchoolDataService) { }

  localSchoolData: SchoolData;
  nationalSchoolData: SchoolData;

  ngOnInit() {
    this.getSchoolData();
    console.log(this.localSchoolData);
  }

  getSchoolData(): void {
    this.schoolDataService.getSchoolData()
      .subscribe(schoolData => {
        this.localSchoolData = schoolData[0];
        this.nationalSchoolData = schoolData[1];
      })
  }

}
