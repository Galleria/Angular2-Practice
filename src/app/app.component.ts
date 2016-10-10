import{Component, ChangeDetectionStrategy, ViewContainerRef , HostListener} from '@angular/core';

@Component({
    selector: 'app',
    template: `<main></main>`
})

export class AppComponent{

    constructor(private viewContainerRef:ViewContainerRef){
    }
/*
    @HostListener('mousedown', ['$event'])
    onMousedown(event: MouseEvent) {
      //console.log( 'mousedown' );
      this.sessionService.activeTime = Date.now();
    }
*/
}
