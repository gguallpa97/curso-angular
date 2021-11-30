import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent{
  contador = 23;
  // Propio de JS
  constructor(){}
  addPadre(value: number){
    this.contador = value;
  }
  disPadre(value: number){
    this.contador = value;
  }
}
