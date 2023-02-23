import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  //declarations: [],
  //imports: [CommonModule, ButtonModule, CardModule],
  exports: [ButtonModule, CardModule, MenubarModule, FieldsetModule],
})
export class PrimeNgModule {}
