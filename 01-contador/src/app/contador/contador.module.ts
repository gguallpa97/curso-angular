import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BotonAddComponent } from './boton-add/boton-add.component';
import { BotonDisComponent } from './boton-dis/boton-dis.component';
import { ContadorComponent } from './contador.component';

@NgModule({
  // Todos los componentes
  declarations: [
    ContadorComponent,
    BotonAddComponent,
    BotonDisComponent
  ],
  imports: [CommonModule], // Modulo comun
  // Para poder utilizar en otros
  exports: [ContadorComponent]
})
export class ContadorModule{
}
