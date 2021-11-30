import { Pipe, PipeTransform } from '@angular/core';
import { TEMPERATURA_ENUM } from '../enums/temperatura.enum';

@Pipe({
  name: 'temperatura'
})
export class TemperaturaPipe implements PipeTransform {

  transform(value: number, tipo: TEMPERATURA_ENUM) {
    let final = value;

    if (tipo === TEMPERATURA_ENUM.F){
        final = value * (9 / 5) + 32;
    }

    return `${final} °${tipo}`;
  }

}
