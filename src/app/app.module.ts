import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule , NgForm }    from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import {
          HeaderComponent,
          FooterComponent,
          MainComponent,
          NotifyMessage,
          HomeComponent,
          DashboardComponent,
          DashboardDetailComponent,
          PageNotFoundComponent
        } from './components/';

import { routing , appRoutingProviders } from './app.route';

//import {} from './shared/services/';

@NgModule({
    imports:    [
                  routing,
                  MaterialModule,
                  BrowserModule ,
                  Ng2BootstrapModule ,
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
                    AppComponent
                  ],
    bootstrap:    [
                    AppComponent
                  ],
    providers:    [
                    appRoutingProviders
                  ]
})

export class AppModule {}
