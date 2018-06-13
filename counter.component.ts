import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Counter Component</h1>
  <p>
  <button (click)="decrease()">-</button>
  {{counterValue}}
  <button (click)="increase()">+</button>
  </p>
` ,
  styles: ['p{color: red}']
})
export class CounterComponent implements OnInit {

  @Input() counter = 0;
  @Output() counterChange = new EventEmitter();

  counterValue:number = 0;

  constructor() { }

  ngOnInit() {
    this.counterValue = this.counter;
  }

  increase(){
    this.counter = this.counterValue++;
    this.counterChange.emit(this.counterValue);
    // this.counterChange.emit(this.counterValue);
  }

  decrease(){
    this.counter = this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

}
