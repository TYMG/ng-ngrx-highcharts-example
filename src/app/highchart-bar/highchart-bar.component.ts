import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-highchart-bar',
  templateUrl: './highchart-bar.component.html',
  styleUrls: ['./highchart-bar.component.css']
})
export class HighchartBarComponent implements OnInit {

  title = 'Highcharts Demo';

  @ViewChild('chartTarget') chartTarget: ElementRef;

  chart: Highcharts.ChartObject;

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    const options: Highcharts.Options = {
      accessibility: {
        keyboardNavigation: {
          skipNullPoints: true
        }
      },
      chart: {
        type: 'line'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 6, 3]
      }]
    }

    this.chart = chart(this.chartTarget.nativeElement, options);
  }

  addSeries() {
    this.chart.addSeries({
      name: 'Balram',
      data: [2, 3, 7]
    })
  }

  constructor() { }

  ngOnInit() {
  }

}
