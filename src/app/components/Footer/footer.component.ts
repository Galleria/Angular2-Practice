import {Component} from '@angular/core';

declare var process:any;

@Component({
    selector: 'footer',
    templateUrl: 'footer.html',
    styles: [`
      #footer{
        height: 20px; /* ความสูงของ footer */
        display: block;
        text-align: center;
      }
      `]
})

export class FooterComponent {

    private _version:string;
    private _environment:string;

    constructor(){
        this._version = process.env.VERSION;
        this._environment = process.env.ENV;
    }
}
