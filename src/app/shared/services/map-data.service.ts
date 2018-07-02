import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import * as $ from 'jquery';
import { $q } from '@uirouter/angular';

import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class MapDataService {

    constructor(private http: HttpClient) {
    }

    retrieveAllData():Observable<any> {
        let mapData = {
            national: {},
            county: {},
            unemployment: {}
        }
        return from($q.all([
            $.getJSON('assets/us-all.geo.json', function(data) {
                mapData.national = data;
            }),
            $.getJSON('assets/us-all-all.geo.json', function(data) {
                mapData.county = data;
            })
        ]).then(data => {
            return data;
        }))
    }

    retrieveNationalCountyMapDataLocalHost(): Observable<any> {
        return this.http.get('http://localhost:4200/assets/us-all-all.geo.json');
    }
}
