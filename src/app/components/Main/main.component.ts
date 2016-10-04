import{Component } from '@angular/core';

@Component({
    selector: 'main',
    template: `
      <div>
        <header></header>
        <notificationMessage></notificationMessage>
        <router-outlet></router-outlet>
        <footer></footer>
      </div>
    `,
    styles: [`
      router-outlet {
         display: block;
         min-height: 100%; /* real browsers */
         height: auto !important; /* real browsers */
         height: 100%; /* IE6 bug */
         margin-bottom: -20px; /* กำหนด margin-bottom ให้ติดลบเท่ากับความสูงของ footer */
      }
    `]
})

export class MainComponent{

}
