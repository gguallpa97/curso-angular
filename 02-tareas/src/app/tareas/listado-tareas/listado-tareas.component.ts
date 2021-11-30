import { Component } from '@angular/core';
import { ITarea } from '../interfaces/tarea.interface';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent {
  /// tareas = [];
  constructor(private tareasService: TareasService){
  }
  get tareas(){
    return this.tareasService.tareas;
  }
  delete(tarea: ITarea){
    this.tareasService.deleteTarea(tarea.tarea);
  }
  completarTarea(tarea: ITarea){
    this.tareasService.completeTarea(tarea.tarea);
  }

}
