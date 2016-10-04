import {Component, OnInit, OnDestroy, ChangeDetectorRef, Input} from '@angular/core';

//import { NotifyService } from '../shared/services';

@Component({
    selector: 'notificationMessage',
    templateUrl: 'notificationMessage.html'
})

export class NotifyMessage implements OnInit, OnDestroy {
/*
    @Input()customMessage:boolean=false;

    private _showMessage: Boolean = false;
    private _message: String = "There was a problem processing the request";
    private _subScription:any;
    private _notifyMessageRow:String = "";

    constructor(public notifyService:NotifyService, public ref:ChangeDetectorRef) {

    }
    /*
    {message:"Hello",showMessage:true/false,status:"error"/"success"}
    * /
    public showMessage(showMessageObject) {
        this._showMessage = showMessageObject.showMessage;
        this._message = showMessageObject.message;
        this.ref.detectChanges();
    }

    ngOnInit() {
        if(!this.customMessage){
            this._subScription = this.notifyService.notifyMessage$.subscribe(notifyObj => {
                this.showMessage(notifyObj);
            });
            this._notifyMessageRow = "row paddingL0R10 paddingB10";
        }else{
            //Css for Modal errorMessage
            this._notifyMessageRow = "row paddingL0R15 paddingB10";
        }
    }

    ngOnDestroy() {
        if(!this.customMessage){
            this._subScription.unsubscribe();
        }
    }
    */
    ngOnInit() {}
    ngOnDestroy() {}
}
