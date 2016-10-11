import {Component , OnInit , Input} from '@angular/core';
import {BaseComponent} from '../BaseComponent';

import { NotifyService } from '../../services';
import PieModel from '../../models/pie.model';
import { HomeComponent } from '../';

@Component({
    selector: 'pie-chart',
    template:  `<div>
                  <div style="display: block">
                    <canvas baseChart
                      [data]="pieChartData"
                      [labels]="pieChartLabels"
                      [chartType]="pieChartType"
                      (chartHover)="chartHovered($event)"
                      (chartClick)="chartClicked($event)">
                    </canvas>
                  </div>
                  <button (click)="randomize()">Update</button>
                </div>`
})

export class PieComponent extends BaseComponent implements OnInit {

    @Input() pieModel: PieModel;

    // Pie
    //public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    //public pieChartData:number[] = [300, 500, 100];
    public pieChartLabels:string[];
    public pieChartData:number[];

    public pieChartType:string = 'pie';

    constructor(public notifyService:NotifyService, public homeComponent:HomeComponent) {
      super(notifyService);
    }

    ngOnInit() {
      this.pieChartLabels = this.pieModel.labels;
      this.pieChartData = this.pieModel.data;
    }

    // events
    public chartClicked(e:any):void {
      //console.log(e);
    }

    public chartHovered(e:any):void {
      //console.log(e);
    }

    public randomize():void {
      // Only Change 3 values
      let data = [
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100)];
      this.pieChartData = this.pieModel.data = data ;

      /**
       * (My guess), for Angular to recognize the change in the dataset
       * it has to change the dataset variable directly,
       * so one way around it, is to clone the data, change it and then
       * assign it;
       */
    }

}
