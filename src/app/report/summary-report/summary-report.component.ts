import { Component, OnInit } from '@angular/core';


export interface Student {
  fname: string;
  lname: string;
  aamcId: string;
  programType: string;
  slr: string;
  sex: string;
  applicantSelection: string;
  selectionDate: string;
}

const SELECTED_MED_SCHOOL: Student[] = [
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" }
]

const SELECTED_OTHER_MED_SCHOOL: Student[] = [
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" },
  { fname: "William", lname: "Redding", aamcId: "175983475", programType: "Regular MD", slr: "VA", sex: "M", applicantSelection: "Plan to Enroll", selectionDate: "4/30/2018" }
]

@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.component.html',
  styleUrls: ['./summary-report.component.css']
})
export class SummaryReportComponent implements OnInit {

  displayedColumns: string[] = ['fname', 'lname', 'aamcId', 'programType', 'slr', 'sex', 'applicantSelection', 'selectionDate']
  selectedMedSchoolDataSource = SELECTED_MED_SCHOOL;
  selectedOtherMedSchoolDataSource = SELECTED_OTHER_MED_SCHOOL;

  constructor() { }

  ngOnInit() {
  }

}
