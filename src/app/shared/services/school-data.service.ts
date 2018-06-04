import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SchoolData } from '../model/school-data';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable({ providedIn: 'root' })
export class SchoolDataService {
    private schoolDataUrl = 'api/school';
    private nationalDataUrl = 'api/national';


    constructor (
        private http: HttpClient
    ){}

    getSchoolData (): Observable<SchoolData> {
        return this.http.get<SchoolData>(this.schoolDataUrl)
            .pipe(
                tap(schoolData => console.log(`fetched school`)),
                catchError(this.handleError('getSchoolData',[]))
            );
    }

    getNationalSchoolData (): Observable<SchoolData> {
        return this.http.get<SchoolData>(this.schoolDataUrl)
            .pipe(
                tap(schoolData => console.log(`fetched school`)),
                catchError(this.handleError('getSchoolData',[]))
            );
    }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}