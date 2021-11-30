import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-boton-dis',
  templateUrl: './boton-dis.component.html',
  styleUrls: ['./boton-dis.component.css']
})
export class BotonDisComponent{
  @Input()contador = 0;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDis: EventEmitter<number> = new EventEmitter();
  dis(){
    this.contador--;
    // console.log(this.contador--);
    this.onDis.emit(this.contador);
  }

}
