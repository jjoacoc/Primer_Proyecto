import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importaciones de las vistas
import { ProductoComponent } from './pages/producto/producto.component';
import { PermutaComponent } from './pages/permuta/permuta.component';
import { AlquilerComponent } from './pages/alquiler/alquiler.component';
import { VentasComponent } from './pages/ventas/ventas.component';

const routes: Routes = [
  {
    path: "producto", component:ProductoComponent
  },
  {
    path: "permuta", component:PermutaComponent
  },
  {
    path: "alquiler", component:AlquilerComponent
  },
  {
    path: "venta", component:VentasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
