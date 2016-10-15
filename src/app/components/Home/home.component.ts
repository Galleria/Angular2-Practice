import{Component,ViewEncapsulation,ChangeDetectionStrategy,OnInit,OnDestroy } from '@angular/core';

import {
  LoadingService,
  NotifyService,
  ObServerService
} from '../../services';

import PieModel from '../../models/pie.model';
import BarModel from '../../models/bar.model';
import PolarModel from '../../models/polar.model';

@Component({
    templateUrl: 'home.html',
    styles: [`
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit, OnDestroy{

  public pieLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieData:number[] = [300,20,100];
  public pieTest:PieModel = new PieModel('1',this.pieLabels,this.pieData);

  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [20, 85, 60, 35, 99, 11, 69], label: 'Series C'}
  ];
  public barChartTest:BarModel = new BarModel('2',this.barChartLabels,this.barChartData);

  public barChartLabels_1:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug' , 'Sep' , 'Oct' , 'Nov' ,'Dec'];
  public barChartData_1:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40, 10, 12, 99, 100, 85 ], label: 'Series A'}
  ];
  public barChartTest_1:BarModel = new BarModel('2',this.barChartLabels_1,this.barChartData_1);

  public polarLabels:string[] = ['Series A', 'Series B', 'Series C'];
  public polarData:number[] = [65,28,20];
  public polarChartTest:PolarModel = new PolarModel('1',this.polarLabels,this.polarData);

  private _subScription:any;

  constructor( public loading: LoadingService, public nmService:NotifyService , public obServerService:ObServerService) {
    console.log(  this.obServerService );
  }

  public showMessage(){
    this.loading.toggleLoadingIndicator(true);
    let msg = {
                message:'errMsg',
                showMessage:true,
                status:"error"
    };

    this.nmService.showNotifyMessage( msg );

    setTimeout( ()=> this.loading.toggleLoadingIndicator(false) ,2000);
  }

  ngOnInit() {

    this._subScription = this.obServerService.dataServices$.subscribe(notifyObj => {
        this.changeData(notifyObj);
    });

  }

  ngOnDestroy() {
    this._subScription.unsubscribe();
  }

  changeData(data){
    console.log( 'this.polarChartTest.data ',this.polarChartTest.data );
    let datas = [100,100,100];
    this.polarChartTest = new PolarModel('1',this.polarLabels,datas);
    //console.log( 'this.polarChartTest.data ',this.polarChartTest.data );
  }

}
