import { Injectable } from '@angular/core';
import { ITarea } from '../interfaces/tarea.interface';

// Esto es lo que diferencia
@Injectable()
export class TareasService{
  tareas: Array <ITarea> = [
    {
      tarea: 'Barrer',
      completada: false
    },
    {
      tarea: 'Trapear',
      completada: false
    },
    {
      tarea: 'Cocinar',
      completada: false
    },
    {
      tarea: 'Cocinar',
      completada: false
    }];
  deleteTarea(nombreTarea: string){
    // this.tareas.pop();
    // Reasignar tareas
    this.tareas = this.tareas.filter( tarea => tarea.tarea !== nombreTarea);
  }
  completeTarea(nombreTarea: string) {
    const tareaF: ITarea = this.tareas.find( tarea => {
      return tarea.tarea === nombreTarea;
    });
    tareaF.completada = !tareaF.completada;
    // console.log(tareaF);
  }
}
