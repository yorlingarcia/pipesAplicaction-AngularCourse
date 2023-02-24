import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'volar',
})
export class VolarPipe implements PipeTransform {
  transform(valor: boolean): string {
    return valor ? 'vuela' : 'no vuela';
  }
}
