import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';

@Injectable()
export class ObServerService{

    public dataServices$ : Observable<String>;
    public clearServices$ : Observable<String>;
    private _observer_start : Observer<String>;
    private _observer_clear : Observer<String>;

    constructor(){
        this.dataServices$ = new Observable(
            observer => this._observer_start = observer
        ).share();

        this.clearServices$ = new Observable(
            observer => this._observer_clear = observer
        ).share();

    }

    passDataServices(messageObject){
        if(this._observer_start){
            this._observer_start.next(messageObject);
        }
    }

    clearDataServices(){
        if(this._observer_clear){
            this._observer_clear.next('clear');
        }
    }

}
