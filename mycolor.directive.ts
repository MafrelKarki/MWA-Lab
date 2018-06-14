import { Directive, ElementRef, Output, EventEmitter, HostListener, Host, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  @Output() event = new EventEmitter();
  private colorsArray: Array<string> = ['blue', 'red', 'green', 'yellow', 'cyan', 'brown', 'gray'];
  private index: number = 0;

  constructor(private _e: ElementRef, private _r: Renderer2) { }

  ngOnInit() {
    this._e.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('click')
  colorChange() {
    console.log("Called color change");
    this._r.setStyle(this._e.nativeElement, 'color', this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)]);
    // this.element.nativeElement.style.color = this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)];
    // this.event.emit(this.element.nativeElement.style.color);
  }


}
