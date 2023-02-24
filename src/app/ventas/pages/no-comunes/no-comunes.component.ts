import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  nombre: string = 'Nancy';
  genero: string = 'femenino';

  //i18nSelect
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  //i18nPlural
  clientes: string[] = ['Maria', 'pedro', 'Yorlin', 'Osney'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': ' tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando', //el numeral permita colocar el numero
  };

  cambiarCliente() {
    if (this.nombre === 'Nancy') {
      this.nombre = 'Yorlin';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Nancy';
      this.genero = 'femenino';
    }
  }

  borrarCliente() {
    this.clientes.shift();
  }

  persona = {
    nombre: 'Yorlin',
    direccion: 'Pamplona',
    edad: '26',
  };
}
