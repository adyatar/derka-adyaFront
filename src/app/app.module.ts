import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/Security/authInterceptor.service';
import { ErrorhandlerInterceptor } from './services/Security/errorhandler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi: true
  },{
    provide : HTTP_INTERCEPTORS,useClass:ErrorhandlerInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
