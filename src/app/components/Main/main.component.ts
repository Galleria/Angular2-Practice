import{Component} from '@angular/core';

@Component({
    selector: 'main',
    template: `
      <div>
        <header></header>
        <loadingModal></loadingModal>
        <notificationMessage></notificationMessage>
        <router-outlet></router-outlet>
        <footer></footer>
      </div>
    `,
    styles: [`
      router-outlet {
         display: block;
         margin-bottom: 30px;
      }
    `]
})

export class MainComponent{
  constructor(){
  }
}
