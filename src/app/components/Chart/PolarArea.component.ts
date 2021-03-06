import {Component , OnInit ,OnChanges, Input , SimpleChange ,DoCheck,AfterContentChecked} from '@angular/core';
import {BaseComponent} from '../BaseComponent';

import { NotifyService } from '../../services';
import PolarModel from '../../models/polar.model';

@Component({
    selector: 'polar-chart',
    template:  `<div>
                  <div style="display: block">
                    <canvas baseChart
                        [data]="polarAreaChartData"
                        [labels]="polarAreaChartLabels"
                        [legend]="polarAreaLegend"
                        [chartType]="polarAreaChartType"
                        (chartHover)="chartHovered($event)"
                        (chartClick)="chartClicked($event)">
                    </canvas>
                  </div>
                  <button (click)="randomize()">Update</button>
                </div>`
})

export class PolarAreaComponent extends BaseComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked {

    @Input() polarModel: PolarModel;
/*
    @Input()
    set polarModel(polarModel: PolarModel) {
      if( polarModel != undefined ){
        console.log( 'polarModel ',polarModel );
        this.polarAreaChartLabels = polarModel.labels;
        this.polarAreaChartData = polarModel.data;
      }
    }
*/

    // PolarArea
    public polarAreaChartLabels:string[];//['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    public polarAreaChartData:number[];//[300, 500, 100, 40, 120];
    public polarAreaLegend:boolean = true;

    public polarAreaChartType:string = 'polarArea';

    constructor(public notifyService:NotifyService) {
      super(notifyService);
      //setInterval( ()=> console.log( this.polarModel ) ,10000);
    }

    ngDoCheck(){
      //console.log('DoCheck');
    }

       ngAfterContentChecked(){
      //console.log('ngAfterContentChecked')
    }


    ngOnInit() {
      
      if( this.polarModel != undefined ){
        this.polarAreaChartLabels = this.polarModel.labels;
        this.polarAreaChartData = this.polarModel.data;
      }
 
    }

    ngOnChanges(...args: any[]) {
      this.polarAreaChartLabels = this.polarModel.labels;
        this.polarAreaChartData = this.polarModel.data;
        console.log('polarModel updated');
  }



    // events
    public chartClicked(e:any):void {
      //console.log(e);
    }

    public chartHovered(e:any):void {
      //console.log(e);
    }

    public randomize():void {
      let data = [
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100)];
      this.polarAreaChartData = this.polarModel.data = data ; //this.polarModel.data = 
    }

}
