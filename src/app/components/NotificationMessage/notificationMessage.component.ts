import {Component, OnInit, OnDestroy, ChangeDetectorRef, Input} from '@angular/core';

import { NotifyService } from '../../services';

@Component({
    selector: 'notificationMessage',
    templateUrl: 'notificationMessage.html',
    styles: [`
      #alert,.alert{
        margin-bottom: 0 px;
        padding: 10 px;
      }
    `]
})

export class NotifyMessage implements OnInit, OnDestroy {

    @Input()customMessage:boolean=false;

    private _showMessage: Boolean = false;
    private _message: String = "There was a problem processing the request";
    private _subScription:any;
    private _notifyMessageRow:String = "";
    public alerts:Array<Object> = [];
    constructor(public notifyService:NotifyService, public ref:ChangeDetectorRef) {

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
        this.alerts.push({msg: 'Another alert!', type: 'warning', closable: true});
        this.alerts.push({msg: 'Another alert!', type: 'danger', closable: true});
    }

    public closeAlert(i:number):void {
      this.alerts.splice(i, 1);
    }

    ngOnInit() {
      this._subScription = this.notifyService.notifyMessage$.subscribe(notifyObj => {
          this.showMessage(notifyObj);
      });
      this._notifyMessageRow = "row paddingL0R5 paddingB5";
    }

    ngOnDestroy() {
        if(!this.customMessage){
            this._subScription.unsubscribe();
        }
    }

}
