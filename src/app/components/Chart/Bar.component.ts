import {Component , OnInit,Input ,OnChanges } from '@angular/core';
import {BaseComponent} from '../BaseComponent';

import { NotifyService , ObServerService } from '../../services';

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

export class BarComponent extends BaseComponent implements OnInit,OnChanges {
    @Input() barModel: BarModel;

    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true,
      tooltips:{
        backgroundColor: 'red',
      datasetIndex: Number,
      index: Number
        
      },
      events:{
        click:function(e){
          console.log( e )
        }
      },
      legend: {
        onHover:function(e,legendItem){
          console.log( legendItem );
        },
        labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
      }
    };

    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartLabels:string[];
    public barChartData:any[];

    constructor(public notifyService:NotifyService,public obServerService:ObServerService) {
      super(notifyService);
    }

    ngOnInit() {
      this.barChartLabels = this.barModel.labels;
      this.barChartData = this.barModel.data;
    }

     ngOnChanges(...args: any[]) {
        console.log('data updated');
    }

    // events
    public chartClicked(e:any):void {
      console.log(e);
      if( e.active[0] != undefined ){
        this.obServerService.passDataServices( e.active[0]._index );
      }
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
