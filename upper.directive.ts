import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.style.textTransform = 'uppercase';
  }

}
