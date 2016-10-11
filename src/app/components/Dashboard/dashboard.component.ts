import {Component} from '@angular/core';
import {BaseComponent} from '../BaseComponent';

import { NotifyService } from '../../services';
import DashboardModel from '../../models/Dashboard.model';


@Component({
    template:  `
      dashboard detail :id
      <div *ngFor="let dashBoard of dashBoardArray">
        <a routerLink="/dashboard/detail/{{dashBoard.name}}" routerLinkActive="active">{{dashBoard.name}}</a><br/>
      </div>
    `
})

export class DashboardComponent extends BaseComponent{
  
  public dashBoardArray:Array<DashboardModel> = [];
  
  constructor(public notifyService:NotifyService) {
    super(notifyService);

    this.dashBoardArray.push( new DashboardModel( 0 , 'Hello') );
    this.dashBoardArray.push( new DashboardModel( 1 , 'React') );
    this.dashBoardArray.push( new DashboardModel( 2 , 'Angular2') );
    this.dashBoardArray.push( new DashboardModel( 3 , 'Vue.js') );

  }
}
