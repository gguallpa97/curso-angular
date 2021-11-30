import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18nselect',
  templateUrl: './i18nselect.component.html',
  styleUrls: ['./i18nselect.component.css']
})
export class I18nselectComponent implements OnInit {
  // Permite personalizar mensajes
  sexo = 'f';
  mensajes = {
    m: 'Bienvenido Usuario',
    f: 'Bienvenida Usuaria',
    other: 'Bienvenido'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
