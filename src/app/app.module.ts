import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule , NgForm }    from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { MaterialModule } from '@angular/material';

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
          BarComponent
        } from './components/';

import { routing , appRoutingProviders } from './app.route';

import {
  LoadingService,
  NotifyService
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
                    AppComponent
                  ],
    bootstrap:    [
                    AppComponent
                  ],
    providers:    [
                    appRoutingProviders,
                    NotifyService,
                    LoadingService
                  ]
})

export class AppModule {}
