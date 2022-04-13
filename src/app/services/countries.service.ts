import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Country} from "../models/country";
import {catchError} from "rxjs/operators";
import {ApiEndPoint} from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public constructor(private http: HttpClient) { }

  private handleError(apiCall: string) {
    return (error: HttpErrorResponse): Observable<any> => {
      return throwError(() => error);
    };
  };

  public getCountries(region: string): Observable<Country[]> {
    const url = `${ApiEndPoint}${region}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError('getCountries'))
    );
  };

}
