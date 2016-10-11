import {Component} from '@angular/core';
import {BaseComponent} from '../BaseComponent';

import { NotifyService } from '../../services';

@Component({
    template:  `
      dashboard detail :id
      <a routerLink="/dashboard/detail/hello" routerLinkActive="active">Hello</a><br/>
      <a routerLink="/dashboard/detail/angular2" routerLinkActive="active">Angular2</a><br/>
    `
})

export class DashboardComponent extends BaseComponent{

  constructor(public notifyService:NotifyService) {
    super(notifyService);
  }
}
