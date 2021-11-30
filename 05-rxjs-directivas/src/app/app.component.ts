import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'rxjs-directivas';
  visible = true;
  // Constructor cuando instanciamos la clase

  // Esto se ejecuta cuando ya esta disponible a nivel de aplicacion
  ngOnInit(){
    this.title = 'Componente creado';
  }

  ngOnDestroy(){
    this.title = 'Componente destruido';
  }
  setVisible(){
    this.visible = !this.visible ;
  }
}
