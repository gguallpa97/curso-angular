import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDisComponent } from './boton-dis.component';

describe('BotonDisComponent', () => {
  let component: BotonDisComponent;
  let fixture: ComponentFixture<BotonDisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonDisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   // pruebas
  it('debe emitir el valor de -1', () => {
    // console.log(component.contador);
    let nuevoContador = 0 ;
    // Validar un emiiter
    component.onDis.subscribe(contador => {
       nuevoContador = contador;
    });
    component.dis(); // es como un click
   // component.add();
    expect(nuevoContador).toBe(-1);
   });
});
