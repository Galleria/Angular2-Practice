import {Component} from '@angular/core';

@Component({
    template:  `
      dashboard detail :id
      <a routerLink="/dashboard/detail/hello" routerLinkActive="active">Hello</a>
      <a routerLink="/dashboard/detail/angular2" routerLinkActive="active">Angular2</a>
    `
})

export class DashboardComponent {

}
