import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { AlquilerComponent } from './pages/alquiler/alquiler.component';
import { PermutaComponent } from './pages/permuta/permuta.component';


@NgModule({
  declarations: [
    ProductoComponent,
    VentasComponent,
    AlquilerComponent,
    PermutaComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoComponent,
    VentasComponent,
    AlquilerComponent,
    PermutaComponent
  ]
})
export class ProductoModule { }
