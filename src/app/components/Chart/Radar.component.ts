import {Component , OnInit} from '@angular/core';
import {BaseComponent} from '../BaseComponent';

import { NotifyService } from '../../services';

@Component({
    selector: 'radar-chart',
    template:  `<div>
                  <div style="display: block">
                    <canvas baseChart
                      [datasets]="radarChartData"
                      [labels]="radarChartLabels"
                      [chartType]="radarChartType"
                      (chartHover)="chartHovered($event)"
                      (chartClick)="chartClicked($event)">
                    </canvas>
                  </div>
                </div>`
})

export class RadarComponent extends BaseComponent implements OnInit {
    // Radar
    public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

    public radarChartData:any = [
      {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
    ];
    public radarChartType:string = 'radar';

    constructor(public notifyService:NotifyService) {
      super(notifyService);
    }

    // events
    public chartClicked(e:any):void {
      //console.log(e);
    }

    public chartHovered(e:any):void {
      //console.log(e);
    }
}
