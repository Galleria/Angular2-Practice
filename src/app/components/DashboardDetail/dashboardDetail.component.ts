import { Component,OnInit } from '@angular/core';
import { Router , ActivatedRoute , Params } from '@angular/router';

@Component({
    template: `
      {{_id}}
      <a routerLink="/dashboard" routerLinkActive="active">Back</a>
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
