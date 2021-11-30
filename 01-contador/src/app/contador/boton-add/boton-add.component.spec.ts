import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAddComponent } from './boton-add.component';

describe('BotonAddComponent', () => {
  let component: BotonAddComponent;
  let fixture: ComponentFixture<BotonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // pruebas
  it('debe emitir el valor de 1', () => {
   // console.log(component.contador);
  let nuevoContador = 0 ;
   // Validar un emiiter
  component.onAdd.subscribe(contador => {
      nuevoContador = contador;
   });

  component.add(); // es como un click
  // component.add();

  expect(nuevoContador).toBe(1);
  });
});
