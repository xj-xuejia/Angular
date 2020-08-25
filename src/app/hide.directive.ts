import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHide]',
})
export class HideDirective {
  constructor(e: ElementRef) {
    console.log(e);
    e.nativeElement.style.display = 'none';
  }
}
