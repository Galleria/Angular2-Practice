import{Component,ViewEncapsulation,ChangeDetectionStrategy } from '@angular/core';

import {
  LoadingService,
  NotifyService
} from '../../services';


@Component({
    templateUrl: 'home.html',
    styles: [`
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent{

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
