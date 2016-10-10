import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';

@Injectable()
export class NotifyService{

    public notifyMessage$ : Observable<String>;
    private _observer : Observer<String>;

    constructor(){
        this.notifyMessage$ = new Observable(
            observer => this._observer = observer
        ).share();
    }

    showNotifyMessage(messageObject){
        if(this._observer){
            this._observer.next(messageObject);
        }
    }
}
