import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective {
  constructor(e: ElementRef) {
    console.log(e);

    e.nativeElement.focus();
  }
}
