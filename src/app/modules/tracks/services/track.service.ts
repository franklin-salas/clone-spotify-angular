import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL= environment.api;
  constructor(private http: HttpClient) { }

  getAllTracks$():Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
    .pipe(map( ({data}:any) => {
      return data;
    }));
  }

  getAllRandom$():Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
    .pipe(map( ({data}:any) => {
      return data.reverse();
    }),
    catchError((err) => {
      const { status, statusText } = err;
      return of([])
    })
  );
  }
}
