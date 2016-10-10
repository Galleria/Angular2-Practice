import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';

@Injectable()
export class NotifyService{

    public showMessage$ : Observable<String>;
    public clearMessage$ : Observable<String>;
    private _observer_show : Observer<String>;
    private _observer_clear : Observer<String>;

    constructor(){
        this.showMessage$ = new Observable(
            observer => this._observer_show = observer
        ).share();

        this.clearMessage$ = new Observable(
            observer => this._observer_clear = observer
        ).share();

    }

    showNotifyMessage(messageObject){
        if(this._observer_show){
            this._observer_show.next(messageObject);
        }
    }

    clearNotifyMessage(){
        if(this._observer_clear){
            this._observer_clear.next('clear');
        }
    }

}
