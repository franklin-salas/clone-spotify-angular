// import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;
  
  constructor(private http: HttpClient,
    // private cookie: CookieService
  ) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`, body);
    // .pipe(
    //   tap((responseOk:any) => { //TODO: Cuando el usuario credenciales Correctas ✔✔
    
    //     const { tokenSession, data } = responseOk
    //     this.cookie.set('token', tokenSession, 4, '/') 
      
    //   })
    // );
  }

  
}
