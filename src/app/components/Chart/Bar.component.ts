import {Component , OnInit,Input} from '@angular/core';
import {BaseComponent} from '../BaseComponent';

import { NotifyService } from '../../services';

import BarModel from '../../models/bar.model';

@Component({
    selector: 'bar-chart',
    template:  `<div>
                  <div style="display: block">
                    <canvas baseChart
                            [datasets]="barChartData"
                            [labels]="barChartLabels"
                            [options]="barChartOptions"
                            [legend]="barChartLegend"
                            [chartType]="barChartType"
                            (chartHover)="chartHovered($event)"
                            (chartClick)="chartClicked($event)"></canvas>
                  </div>
                  <button (click)="randomize()">Update</button>
                </div>`
})

export class BarComponent extends BaseComponent implements OnInit {
    @Input() barModel: BarModel;

    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartLabels:string[];
    public barChartData:any[];

    constructor(public notifyService:NotifyService) {
      super(notifyService);
    }

    ngOnInit() {
      this.barChartLabels = this.barModel.labels;
      this.barChartData = this.barModel.data;
    }

    // events
    public chartClicked(e:any,idx:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      //console.log(e);
    }

    public randomize():void {
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      this.barChartData.forEach( (numData,idx)=> {
          let data:number[] = [];
          numData.data.forEach( (num)=> {
            data.push(Math.round(Math.random() * 100)+10);
          })
          clone[idx].data = data;
      });
      this.barChartData = this.barModel.data = clone;

    }

}
