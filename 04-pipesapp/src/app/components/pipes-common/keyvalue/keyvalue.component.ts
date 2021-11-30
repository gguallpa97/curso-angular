import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyvalue',
  templateUrl: './keyvalue.component.html',
  styleUrls: ['./keyvalue.component.css']
})
export class KeyvalueComponent implements OnInit {

  persona = {
    nombre: 'Jose',
    edad: 25,
    ocupacion: 'Doctor'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
