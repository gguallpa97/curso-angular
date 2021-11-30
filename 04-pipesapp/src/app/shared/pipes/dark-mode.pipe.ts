import { Pipe, PipeTransform } from '@angular/core';

// AsyncPipe async
@Pipe({
    name: 'darkmode'
})
export class DarkModePipe implements PipeTransform{
  transform(value: boolean) {
      return value ? 'bg-dark text-white' : 'bg-light text-dark';
  }

}
