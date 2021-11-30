import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent implements OnInit {

  @ViewChild('miFormulario')
  miFormulario: NgForm;
  constructor() { }
  tecnologias: Array<string> = [];

  proyectos: any [] = [];
  estadoInicial = {
    proyecto: '',
    horas: 0,
    tecnologia: ''
  };

  ngOnInit(): void {
  }
  agregar(){
    if (this.miFormulario.invalid){
      return;
    }
    const pro = 'proyecto';
    const hor = 'horas';
    this.proyectos.push({
      proyecto: this.miFormulario.controls[pro].value,
      horas: this.miFormulario.controls[hor].value,
      tecnologias: this.tecnologias
    });

    this.miFormulario.resetForm();
    this.tecnologias = [];
    console.log(this.proyectos);
  }
  agregarTec(){
    // Evitar un campo vacio
    if (this.estadoInicial.tecnologia === undefined || this.estadoInicial.tecnologia === '' ){
      return;
    }
    this.tecnologias.push(this.miFormulario.controls.tecnologia.value);
    this.miFormulario.resetForm({
      ... this.miFormulario.value,
      tecnologia: ''
    });
    // onsole.log(this.tecnologias);
  }

}
