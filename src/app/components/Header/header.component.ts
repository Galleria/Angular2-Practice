import{Component,ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'header',
    template: `
      <md-toolbar class="bg-header">
        <a routerLink="" routerLinkActive="active">Application Title</a>
        <span class="example-fill-remaining-space"></span>
        <nav>
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
          <button md-button color="accent" >
            Learn More
          </button>
        </nav>
      </md-toolbar>
    `,
    styles: [`
    	.example-fill-remaining-space {
    	  flex: 1 1 auto;
    	}
      .bg-header{
        background-color: #4548F7;
        color : white;
      }
      a{
        color : white;
      }
    `]
})

export class HeaderComponent{

}
