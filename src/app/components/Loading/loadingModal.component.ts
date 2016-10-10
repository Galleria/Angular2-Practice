import {Component, ViewChild, ElementRef, OnInit, OnDestroy} from '@angular/core';
import { LoadingService } from '../../services';

let imgURL = require('../../assets/img/loading.gif');

@Component({
  selector: 'loadingModal',
  template: `
    <div bsModal #loadingModal="bs-modal" class="modal fade loadingModal" tabindex="-1" role="dialog"
    aria-labelledby="myLargeModalLabel" aria-hidden="false" [config]="{backdrop: 'static',keyboard:false}">
      <div class="modal-dialog modal-sm loadingModal">
        <div class="modal-content loading">
          <div class="modal-body">
            Loading
            <img class="loadingIcon" [src]="_loadingImg">
          </div>
        </div>
      </div>
    </div>
  `
})

export class LoadingModal implements OnInit, OnDestroy {

  @ViewChild('loadingModal') modal:any;
  private _subScription:any;
  private _loadingImg:string = imgURL;

  constructor(public loadingService:LoadingService){

  }

  public toggleLoading(loading) {
    if(loading){
      this.modal.show();
    }else{
      this.modal.hide();
    }
  }

  ngOnInit(){
    this._subScription = this.loadingService.loading$.subscribe(loading=>{
      this.toggleLoading(loading);
    });
  }

  ngOnDestroy(){
      this._subScription.unsubscribe();
  }

}
