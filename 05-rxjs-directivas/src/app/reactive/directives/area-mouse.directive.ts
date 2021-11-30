import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAreaMouse]'
})
export class AreaMouseDirective implements OnInit{

  @Input() color = 'green';
  @Input() height = 200;
  private htmlElement: ElementRef<HTMLDivElement>;
  constructor( private el: ElementRef<HTMLDivElement>) {
    this.htmlElement = el;
   }
  ngOnInit(){
    this.setBackground();
    this.setHeight();
  }
  setBackground(){
      this.htmlElement.nativeElement.style.backgroundColor = this.color;
  }

  setHeight(){
    this.htmlElement.nativeElement.style.height = `${this.height}px`;
  }

}
