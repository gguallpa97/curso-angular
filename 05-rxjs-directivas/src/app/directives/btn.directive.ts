import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective implements OnInit {

  @Input() bgColor = 'red';
  @Input() textColor = 'snow';
  @Input() width = '5';

  private htmlElement: ElementRef<HTMLButtonElement>;
  constructor(private el: ElementRef<HTMLButtonElement>) {
    this.htmlElement = el;
  }
  ngOnInit() {
    this.setColor();
    this.setWidth();
  }

  setColor() {
    this.htmlElement.nativeElement.style.backgroundColor = this.bgColor;
    this.htmlElement.nativeElement.style.color = this.textColor;
    this.htmlElement.nativeElement.style.border = 'none';
  }
  setWidth() {
    this.htmlElement.nativeElement.style.width = `${this.width}rem`;
    this.htmlElement.nativeElement.style.padding = `1rem`;
  }
}
