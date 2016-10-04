import {Routes , RouterModule} from "@angular/router";
import { MaterialModule } from '@angular/material';
import { ModuleWithProviders } from '@angular/core';

import {
    HomeComponent,
    DashboardComponent,
    DashboardDetailComponent,
    PageNotFoundComponent
} from "./components/";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/detail/:id', component: DashboardDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
