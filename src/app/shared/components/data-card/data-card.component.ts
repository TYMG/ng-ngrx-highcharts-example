import { Component, OnInit, Input } from '@angular/core';

import { DataField } from '../../model/school-data';

@Component({
  selector: 'data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  @Input('dataField')
  dataField:DataField;

  constructor() { }

  ngOnInit() {
  }

}
