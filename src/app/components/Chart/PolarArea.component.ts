import {Component , OnInit , Input} from '@angular/core';
import {BaseComponent} from '../BaseComponent';

import { NotifyService } from '../../services';
import PieModel from '../../models/pie.model';

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

export class PolarAreaComponent extends BaseComponent implements OnInit {

    @Input() pieModel: PieModel;

    // PolarArea
    public polarAreaChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    public polarAreaChartData:number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend:boolean = true;

    public polarAreaChartType:string = 'polarArea';

    constructor(public notifyService:NotifyService) {
      super(notifyService);
    }

    ngOnInit() {

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
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100)];
      this.polarAreaChartData = data ;
    }

}
