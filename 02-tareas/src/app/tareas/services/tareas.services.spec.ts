import { TareasService } from './tareas.service';
describe('TareasService', () => {
  // tslint:disable-next-line: prefer-const
  let service: TareasService;

  beforeEach( () => {
    service = new TareasService();
  });
  // Verificar que el arreglo tenga 4 elementos
  it('ToBe: Verificar que mi servicio inice en 4 tareas', () => {
    expect(service.tareas.length).toBe(4);
  });

  it('Delete: Borrar una tarea Barrer', () => {
    service.deleteTarea('Barrer');
    expect(service.tareas.length).toBe(3);
  });
  it('No Delete: No deberia borrar una tarea que no existe.', () => {
    service.deleteTarea('Barrer');
    expect(service.tareas.length).toBe(3);
  });

  // Crear un espia
  it('Spy: debería llamar la funcion completar una sola ver', () => {
    const espia = jasmine.createSpyObj('TareasService', ['completeTarea']);
    espia.completeTarea();
    expect(espia.completeTarea.calls.count()).toBe(1);
  });
});
