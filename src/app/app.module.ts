import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';


@NgModule({
  declarations: [ //TODO: DECLARACIONES,COMPONENETES, PIPES, DIRECTIVAS
    AppComponent
  ],
  imports: [  //TODO: SOLO SE IMPORTA MODULOS
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ], 
  //TODO: SE EXPORTA CON LO Q SE DECLARA
  exports:[],
  providers: [CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
