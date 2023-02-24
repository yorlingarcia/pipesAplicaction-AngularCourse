import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(valor: string, enMayusculas: boolean = false): string {
    return enMayusculas ? valor.toUpperCase() : valor.toLowerCase();
    // if (enMayusculas === true) {
    //   return valor.toUpperCase();
    // } else {
    //   return valor.toLowerCase();
    // }
  }
}
