import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[remove-host]'
})
export class RemoveHost {
    el: any = null
    constructor(private ele: ElementRef) {
        this.el = ele
    }

    //wait for the component to render completely
    ngOnInit() {
        var nativeElement: HTMLElement = this.el.nativeElement,
            parentElement: HTMLElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            if (parentElement) {
                parentElement.insertBefore(nativeElement.firstChild, nativeElement);
            }
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    }
}