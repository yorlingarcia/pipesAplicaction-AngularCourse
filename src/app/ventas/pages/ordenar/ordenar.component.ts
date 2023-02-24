import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  value: boolean = false;

  cambiar() {
    this.value ? (this.value = false) : (this.value = true);
    console.log(this.value);
  }
}
