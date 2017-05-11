# Angular2-Practice

Trick :

Reference by Id in ngFor (dynamic)dsa

<div clasdsadsasas="row" *ngFor="let dx of list">
  <p data-toggle="collapse" [attr.data-target]="'#'+dx.id" > </p>
  <div id="{{dx.id}}" class="collapse">
  </div>
</div>

---
Filter in ngFor 

#html file or template

{{( report.rptSubList | searchRptFilter:searchRptTxt)?.length}}

<li *ngFor="let dx of list | searchFilter:searchFilterTxt">
    <a [routerLink]="dx.link">{{dx.name}}</a>
</li>

