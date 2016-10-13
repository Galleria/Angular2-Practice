import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule , NgForm }    from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { MaterialModule } from '@angular/material';

import { AUTH_PROVIDERS }      from 'angular2-jwt';

import {ChartsModule} from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import {
          HeaderComponent,
          FooterComponent,
          MainComponent,
          NotifyMessage,
          HomeComponent,
          DashboardComponent,
          DashboardDetailComponent,
          PageNotFoundComponent,
          LoadingModal,
          BarComponent,
          PieComponent,
          LineComponent,
          RadarComponent,
          PolarAreaComponent,
          LoginComponent
        } from './components/';

import { routing , appRoutingProviders } from './app.route';

import {
  LoadingService,
  NotifyService,
  ObServerService
} from './services/';

@NgModule({
    imports:    [
                  routing,
                  MaterialModule,
                  BrowserModule ,
                  Ng2BootstrapModule ,
                  ChartsModule,
                  FormsModule ,
                  HttpModule
                ],
    declarations: [
                    HomeComponent,
                    DashboardComponent,
                    DashboardDetailComponent,
                    PageNotFoundComponent,
                    HeaderComponent,
                    MainComponent,
                    FooterComponent,
                    NotifyMessage,
                    LoadingModal,
                    BarComponent,
                    PieComponent,
                    LineComponent,
                    RadarComponent,
                    PolarAreaComponent,
                    LoginComponent,
                    AppComponent
                  ],
    providers:    [
                    AUTH_PROVIDERS,
                    appRoutingProviders,
                    NotifyService,
                    LoadingService,
                    ObServerService
                  ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}
