import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private readonly URL= environment.api;
  constructor(private http: HttpClient) { }

  getAllTracks$():Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
    .pipe(map( ({data}:any) => {
      return data;
    }));
  }
}
