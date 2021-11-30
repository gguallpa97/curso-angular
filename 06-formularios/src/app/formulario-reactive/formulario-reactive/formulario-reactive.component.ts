import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css'],
})
export class FormularioReactiveComponent implements OnInit {
  // No recomendado
  /* miFormulario: FormGroup = new FormGroup({
    proyecto: new FormControl(''),
    horas: new FormControl(''),
    tecnologia: new FormControl(0)
  });*/
  miFormulario: FormGroup = this.fb.group({
    // 1. valor inicial, validator, asyn validator
    proyecto: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    horas: this.fb.control(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(50),
    ]),
    tecnologias: this.fb.array([]),
  });

  // Control Independiente , [ ]
  tecnologia: FormControl = this.fb.control('', [
    Validators.required,
    Validators.min(3),
    Validators.maxLength(20)
  ]);

  proyectos: any [] = [];





  get tecnologias(){
    return this.miFormulario.get('tecnologias') as FormArray;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  validar() {
    return this.miFormulario.invalid && this.miFormulario.touched;
  }

  agregarT(){
    if (this.tecnologia.invalid){
      // error
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.tecnologias.push(this.fb.control( this.tecnologia.value));

    this.tecnologia.reset();
    // console.log(this.tecnologias.value);
  }

  agregarProyecto(){

    if (this.miFormulario.invalid){
      // error
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.proyectos.push(this.miFormulario.value);

    this.miFormulario.reset();
    // Limpiar arreglo
    this.tecnologias.clear();
    // console.log(this.miFormulario.value);
  }
}
