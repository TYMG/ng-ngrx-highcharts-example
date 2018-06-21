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

  mapData: any;

  mapDataObservable: Observable<any>;

  constructor(private http: HttpClient) {
  }

  retrieveNationalMapData(): Observable<any> {
    return this.http.get('../../../assets/us-all-all.geo.json');

  }
  retrieveNationalCountyMapDataAssets(): Observable<any> {
    return this.http.get('assets/us-all-all.geo.json');
  }

  retrieveNationalCountyMapDataLocalHost(): Observable<any> {
    return this.http.get('http://localhost:4200/assets/us-all-all.geo.json');
  }
}
