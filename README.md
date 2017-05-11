# Angular2-Practice

Trick :

---
Reference by Id in ngFor (dynamic)
```Javascript
<div clasdsadsasas="row" *ngFor="let dx of list">
  <p data-toggle="collapse" [attr.data-target]="'#'+dx.id" > </p>
  <div id="{{dx.id}}" class="collapse">
  </div>
</div>
```

---
Filter in ngFor 
- create filter component and add to app.module
- add filter to html/template

```typescript
// Filter component.

import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'searchFilter' })
export class Filter implements PipeTransform {
  transform(list: string[] , txt: string) {
    return list.filter( item => item.toLowerCase().indexOf(txt.toLowerCase()) > -1 ) 
  }
}
```

```Javascript
#html file or template

<input type="text" [(ngModel)]="searchFilterTxt" >

{{( report.rptSubList | searchFilter:searchFilterTxt)?.length}}

<li *ngFor="let dx of list | searchFilter:searchFilterTxt">
    <a [routerLink]="dx.link">{{dx.name}}</a>
</li>
```

```typescript
// Component.

import { Pipe, PipeTransform } from '@angular/core'

@Component({ ... })
export class Component {
  private searchFilterTxt:String;
  constructor(){
  }
  //...
}
```

```typescript
// app.module.
@NgModule({
  imports: [],
  declarations: [Filter],
  bootstrap:    [],
  providers:    []
})
```

