import {Directive,Input,Renderer,ElementRef} from '@angular/core';

@Directive({
    selector : '[highlight]'
})

export class HighLightDirective{
            constructor(el: ElementRef, renderer : Renderer){
                renderer.setElementStyle(el.nativeElement,'backgroundColor','green');
            }
}