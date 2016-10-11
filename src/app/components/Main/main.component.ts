import{Component} from '@angular/core';

@Component({
    selector: 'main',
    template: `
      <div>
        <header></header>
        <loadingModal></loadingModal>
        <notificationMessage></notificationMessage>
        <div class="container">
          <router-outlet></router-outlet>
        </div>
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
