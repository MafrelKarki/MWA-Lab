import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {

  @Input() Myvisibility: boolean = true;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    if (this.Myvisibility) {
      this.element.nativeElement.style.visibility = "visible";
    } else {
      this.element.nativeElement.style.visibility = "hidden";
    }
  }


}
