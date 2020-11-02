import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Covid } from './../models/covid';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllCountryCovidReports(): Observable<any> {
    return this.http.get<Covid[]>(`https://corona.lmao.ninja/v2/countries"`)
    .pipe(
      tap((response: any) => {
        console.log(response);
      }),
      map(response => {
        const covidList: Covid[] = [];
        response.forEach(covidResp => {
          const covid: Covid = new Covid();
          covid.country =  covidResp.country;
          covid.flag =  covidResp.countryInfo.flag;
          covid.continent =  covidResp.continent;
          covid.cases =  covidResp.cases;
          covid.todayCases =  covidResp.todayCases;
          covid.deaths =  covidResp.deaths;
          covid.todayDeaths =  covidResp.todayDeaths;
          covid.recovered =  covidResp.recovered;
          covid.todayRecovered =  covidResp.todayRecovered;
          covid.active =  covidResp.active;
          covid.critical =  covidResp.critical;
          covid.tests =  covidResp.tests;
          covidList.push(covid);
        });
        return covidList;
      }),
      catchError(this.handleErrorAndReturnEmptyObservable.bind(this)),
      finalize(() => {
        console.log('Clean up your resource here ');
      })
    );
  }

  private handleRemoteError(error: HttpErrorResponse | any): Observable<any> {
    console.error('Error caught while making remote Service call, continue with empty country object', error);
    return of(new Covid());
  }

  private handleErrorAndReturnEmptyObservable(error: HttpErrorResponse | any): Observable<any> {
    console.error('Error caught while making remote Service call, continuing with empty Observable', error);
    return EMPTY;
  }

  public handleAndThrowRemoteError(error: HttpErrorResponse | any): Observable<any> {
    return throwError(error);
  }

}
