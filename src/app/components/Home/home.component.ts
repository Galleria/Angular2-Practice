import{Component,ViewEncapsulation,ChangeDetectionStrategy } from '@angular/core';

import {
  LoadingService,
  NotifyService
} from '../../services';

import PieModel from '../../models/pie.model';

@Component({
    templateUrl: 'home.html',
    styles: [`
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent{
  public labels:Array<string> = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public data:Array<number> = [300,20,100];
  public pieTest:PieModel = new PieModel('1',this.labels,this.data);

  constructor( public loading: LoadingService, public nmService:NotifyService ) {

  }

  public showMessage(){
    this.loading.toggleLoadingIndicator(true);
    let msg = {
                    message:'errMsg',
                    showMessage:true,
                    status:"error"
                };

    this.nmService.showNotifyMessage( msg );

    setTimeout( ()=> this.loading.toggleLoadingIndicator(false) ,2000);
  }

}
