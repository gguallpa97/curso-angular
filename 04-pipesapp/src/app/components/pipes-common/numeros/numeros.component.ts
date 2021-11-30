import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  calificacion = 7.91554554;
  porcentaje = 0.36;
  saldo = 12000;

  constructor() { }

  ngOnInit(): void {
  }

}
