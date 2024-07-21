import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  searchTracks$(term: string = ""): Observable<any> {
    console.log("")
    term = term.trim();
    return this.http.get(`${this.URL}/tracks?src=${term}`)
      .pipe(
        map((dataRaw: any) => dataRaw.data),
        
        map(data => data.filter((item:any) => (  item === "" || item.name.toUpperCase().includes(term.toUpperCase()) || item.album.toUpperCase().includes(term.toUpperCase()) )))    
      )
  }
}

        // 