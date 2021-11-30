import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { filter, take , map} from 'rxjs/operators';
@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css'],
})
export class ReactiveContainerComponent implements OnInit, OnDestroy {
  // Es un observable
  miIntervalo: Observable<number> = interval(1000).pipe(
    // al cero le hago 1, para que no me imprima el cero
    map(value => value + 1),
    // Filtrar los numeros
    filter((value) => value % 2 === 0),
    // Limitar a 4 ejecuciones
    take(5)
  );

  miSubscripcion: Subscription | null = null;
  constructor() {
    /*let numero = 0;
    const  miObservable = new Observable<number>((observer) => {
      setInterval(() => {
        // console.log(numero);
        numero++;
        observer.next(numero);

        observer.complete();

        if ( numero === 3){
          observer.error('Numero Erroneo');
        }
      }, 1000);
    });*/
    // Tome el observable y lo ejecute, pero esto ya esta deprecado
    /* miObservable.subscribe(
      // 1. etapa resultado
      (result) => {
      console.log(result);
      },
      // 2. errores
      (error) => {
        console.error(error);
      },
      // 3. complete
      ( ) => {
        console.log('Observable completado');
      }
    );*/
    // Esta es la nueva forma
    /*miObservable.subscribe({
      // 1. etapa resultado
      next: (result) => {
        console.log(result);
        },
        // 2. errores
        error: (error) => {
          console.error(error);
        },
        // 3. complete
        complete: ( ) => {
          console.warn('Observable completado');
        }
    });*/
  }

  ngOnInit(): void {
    // Deprecated
    // this.miIntervalo.pipe( filter ( (value) => { return value % 2 === 0 }) ).subscribe( value => console.log(value));

    // Me manda numeros pares
    // this.miIntervalo.subscribe((value) => console.log(value));

    // Recomendado
    this.miSubscripcion = this.miIntervalo.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Observable completado')
    });
  }
  ngOnDestroy(): void{
    this.miSubscripcion.unsubscribe();
    console.log('Componete destruido');
  }
}
