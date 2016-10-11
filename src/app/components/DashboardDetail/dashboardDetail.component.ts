import { Component,OnInit } from '@angular/core';
import { Router , ActivatedRoute , Params } from '@angular/router';

@Component({
    template: `
    <div class="row" style="min-height:500px">
      <div class="col-md-12">
        {{_id}}
        <br/>
      </div>
      <a routerLink="/dashboard" routerLinkActive="active">Back</a>
    </div>
    `
})

export class DashboardDetailComponent  implements OnInit {
  public _id:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       this._id = params['id'];
     });
  }

}
