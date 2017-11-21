import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';

import {ServiceWorkerModule} from '@angular/service-worker';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

/* NgRx Store Redux components */
import { StoreModule } from '@ngrx/store';
import {APP_REDUCERS} from './shared/reducers';

import { AppRoutingModule } from './app.routing';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    HttpModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    StoreModule.forRoot(APP_REDUCERS),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
