import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import {AppModule} from './app/app.module';

import 'bootstrap/dist/css/bootstrap.css';
import './app/assets/css/styles.css';
import '@angular/material/core/theming/prebuilt/deeppurple-amber.css';
import '../node_modules/chart.js/src/chart.js';

//import './app/assets/js/lock.min.js';

declare var process: any;
if (process.env.ENV !== "DEV") {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule( AppModule );
