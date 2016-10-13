import {Component, OnInit, OnDestroy, ChangeDetectorRef, Input} from '@angular/core';

import { NotifyService } from '../../services';

@Component({
    selector: 'notificationMessage',
    templateUrl: 'notificationMessage.html',
    styles: [`
    `]
})

export class NotifyMessage implements OnInit, OnDestroy {

    @Input()customMessage:boolean=false;

    private _showMessage: Boolean = false;
    private _message: String = "There was a problem processing the request";
    private _subScription:any;
    private _clearSubScription:any;
    private _notifyMessageRow:String = "";
    public alerts:Array<Object> = [];

    constructor(public notifyService:NotifyService, public ref:ChangeDetectorRef) {

    }

    ngOnInit() {
      this._subScription = this.notifyService.showMessage$.subscribe(notifyObj => {
          this.showMessage(notifyObj);
      });

      this._clearSubScription = this.notifyService.clearMessage$.subscribe(notifyObj => {
          this.clearAlert();
      });

      this._notifyMessageRow = "row paddingL0R5 paddingB5";
    }

    ngOnDestroy() {
      this._subScription.unsubscribe();
      this._clearSubScription.unsubscribe();
    }

    /*
    {message:"Hello",showMessage:true/false,status:"error"/"success"}
    */
    public showMessage(showMessageObject) {
      /*
        this._showMessage = showMessageObject.showMessage;
        this._message = showMessageObject.message;
        this.ref.detectChanges();
        */
        this.alerts.push({msg: 'Another alert! '+new Date(), type: 'warning', closable: true});
        this.alerts.push({msg: 'Another alert! '+new Date(), type: 'danger', closable: true});
    }

    public closeAlert(i:number):void {
      this.alerts.splice(i, 1);
    }

    public clearAlert(){
      this.alerts = [];
    }


}
