import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18nplural',
  templateUrl: './i18nplural.component.html',
  styleUrls: ['./i18nplural.component.css']
})
export class I18npluralComponent implements OnInit {
  // Para que en base a algo me de un mensaje
  notificaciones = 0;

  mensaje = {
    '=0': 'No tienes ninguna notificacion',
    '=1': 'Tienes una notificacion',
    other : ` Tienes # notificaciones`
  };

  constructor() { }

  ngOnInit(): void {
  }
  addNotificacion(){
    this.notificaciones++;
  }

}
