import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton-add',
  templateUrl: './boton-add.component.html',
  styleUrls: ['./boton-add.component.css']
})
export class BotonAddComponent {
  @Input() contador = 0;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onAdd: EventEmitter<number> = new EventEmitter();
  add(){
    this.contador++;
    // console.log(this.contador++);
    this.onAdd.emit(this.contador);
  }
}
