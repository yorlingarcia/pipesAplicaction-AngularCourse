import { Component } from '@angular/core';
import { ResolveEnd } from '@angular/router';
import { interval } from 'rxjs';

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

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Aquaman',
      vuela: true,
    },
    {
      name: 'Robin',
      vuela: true,
    },
  ];

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos la data de promesa');
    }, 3500);
  });
}
