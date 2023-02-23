import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'yorlin';
  nombreUpper: string = 'YORLIN';
  nombreCompleto: string = 'yOrlIn GaRCIa';

  fecha: Date = new Date();
}
