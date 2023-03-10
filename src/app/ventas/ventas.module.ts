import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicosComponent } from './pages/basicos/basicos.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { VolarPipe } from './pipes/volar.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    //components
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    // pipes
    MayusculasPipe,
    VolarPipe,
    OrdenarPipe,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
  ],
})
export class VentasModule {}
