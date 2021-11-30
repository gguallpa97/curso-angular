import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContadorComponent } from './contador.component';
import { BotonAddComponent } from './boton-add/boton-add.component';
describe('CounterComponet Unit', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContadorComponent
      ],
    }).compileComponents();
  }));
  // Unit Testing
  // Para ver si se crea el componete
  it('Se debe crear el componente contador', () => {
    const fixture = TestBed.createComponent(ContadorComponent);
    // Ver si se esta instlaciando
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('Debe crear el texto CONTADOR: 23', () => {
    const fixture = TestBed.createComponent(ContadorComponent);
    // Detecto cambios
    fixture.detectChanges();
    // Html nativo
    const compiled: HTMLElement = fixture.nativeElement;
    console.log(compiled);
    // Ver si se esta instlaciando
    // expect(fixture.componentInstance).toBeTruthy();
    expect(compiled.querySelector('h1')?.textContent).toEqual('CONTADOR: 23');
  });

  it('valor inicial del contado es 23', () => {
    //  Prueba a la parte logica
    const contador = new ContadorComponent();
    expect(contador.contador).toBe(23);
  });
});

describe('Integration Testing', () => {
  let component: ContadorComponent;
  let fixture: ComponentFixture<ContadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContadorComponent, BotonAddComponent
      ],
    }).compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(ContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Botones
  it('Evento click', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const contadorValue = compiled.querySelector('h1');
    const btnAdd: HTMLElement = fixture.debugElement.nativeElement.querySelector('#add');
    btnAdd.click();
    // Detectar cambios
    fixture.detectChanges();
    expect(contadorValue.textContent).toEqual('CONTADOR: 24');
  });
});
