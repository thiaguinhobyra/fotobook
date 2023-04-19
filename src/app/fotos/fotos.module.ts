import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotosRoutingModule } from './fotos-routing.module';
import { GaleriaComponent } from './galeria/galeria.component';


@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    FotosRoutingModule
  ]
})
export class FotosModule { }
