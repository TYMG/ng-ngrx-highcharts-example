import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import * as $ from 'jquery';
import { $q } from '@uirouter/angular';


import { chart } from 'highcharts';
import { map, MapOptions } from 'highcharts';
import * as Highcharts from 'highcharts';

import * as HC_map from 'highcharts/modules/map';


@Component({
  selector: 'app-map',
  templateUrl: './highchart-map.component.html',
  styleUrls: ['./highchart-map.component.css']
})
export class HighchartMapComponent implements OnInit {
  title = 'Highcharts Demo';
  map: any;

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }


  constructor() {
    var Highcharts = require('highcharts/highstock');
    require('highcharts/modules/map')(Highcharts);
    require('highcharts/modules/drilldown')(Highcharts);
    require('highcharts/modules/exporting')(Highcharts);
    require('highcharts/modules/data')(Highcharts);

    let mapData = {
      national: {},
      county: {},
      unemployment: {}
    };

    $q.all([
      $.getJSON('https://code.highcharts.com/mapdata/countries/us/us-all.geo.json', function (data) {
        mapData.national = data;
      }),
      $.getJSON('https://code.highcharts.com/mapdata/countries/us/us-all-all.geo.json', function (data) {
        mapData.county = data;
      }),
      $.getJSON('https://cdn.rawgit.com/highcharts/highcharts/v6.0.4/samples/data/us-counties-unemployment.json', function (data) {
        mapData.unemployment = data;
      })
    ]).then(data => {
      var data = Highcharts.geojson(mapData.national),
        separators = Highcharts.geojson(mapData.national, 'mapline'),
        // Some responsiveness
        small = $('#applicantPoolByStateAndRegionContainer').width() < 400;

      // Set drilldown pointers
      $.each(data, function (i) {
        this.drilldown = this.properties['hc-key'];
        this.value = i; // Non-random bogus data
      });

      // Instantiate the map
      Highcharts.mapChart('applicantPoolByStateAndRegionContainer', {
        chart: {
          height: 500,
          marginTop: 75,
          marginBottom: 75,
          events: {
            drilldown: function(e) {
              if (!e.seriesOptions) {
                var chart = this,
                  mapKey = 'countries/us/' + e.point.drilldown + '-all',
                  // Handle error, the timeout is cleared on success
                  fail = setTimeout(function() {
                    if (!Highcharts.maps[mapKey]) {
                      chart.showLoading('<i class="icon-frown"></i> Failed loading ' + e.point.name);
                      fail = setTimeout(function() {
                        chart.hideLoading();
                      }, 1000);
                    }
                  }, 3000);

                // Show the spinner
                chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>'); // Font Awesome spinner

                // Load the drilldown map
                $.getJSON('https://code.highcharts.com/mapdata/' + mapKey + '.geo.json', function(mapData) {


                  data = Highcharts.geojson(mapData);

                  // Set a non-random bogus value
                  $.each(data, function(i) {
                    this.value = i;
                  });

                  // Hide loading and add series
                  chart.hideLoading();
                  clearTimeout(fail);
                  chart.addSeriesAsDrilldown(e.point, {
                    name: e.point.name,
                    data: data,
                    dataLabels: {
                      enabled: true,
                      format: '{point.name}'
                    }
                  });
                });
              }

              this.setTitle(null, {text: e.point.name});
            },
            drillup: function() {
              this.setTitle(null, {text: ''});
            }
          }
        },

        title: {
          text: ''
        },

        subtitle: {
          text: '',
          floating: true,
          align: 'right',
          y: 50,
          style: {
            fontSize: '16px'
          }
        },

        credits: {
          enabled: false
        },

        legend: small ? {} : {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },

        colorAxis: {
          min: 0,
          minColor: '#E6E7E8',
          maxColor: '#005645'
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },

        plotOptions: {
          map: {
            states: {
              hover: {
                color: '#EEDD66'
              }
            }
          }
        },

        series: [{
          data: data,
          name: 'USA',
          dataLabels: {
            enabled: true,
            format: '{point.properties.postal-code}'
          }
        }, {
          type: 'mapline',
          data: separators,
          color: 'silver',
          enableMouseTracking: false,
          animation: {
            duration: 500
          }
        }],

        drilldown: {
          activeDataLabelStyle: {
            color: '#FFFFFF',
            textDecoration: 'none',
            textOutline: '1px #000000'
          },
          drillUpButton: {
            relativeTo: 'spacingBox',
            position: {
              x: 0,
              y: 60
            }
          }
        }
      });


    });

  }

  ngOnInit() {
  }


}
