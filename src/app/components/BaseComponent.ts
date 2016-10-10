import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';

import { NotifyService } from '../services';

export class BaseComponent implements OnInit, OnDestroy {

    constructor(public notifyService:NotifyService ) {
      console.log( this.notifyService )
    }

    ngOnInit() {
      this.notifyService.clearNotifyMessage();
    }

    ngOnDestroy() {

    }

}
