import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ImagenesComponent } from './imagenes/imagenes.component';

const routes: Routes = [{ path: 'inicio', component: InicioComponent },
{ path: 'galeria', component: ImagenesComponent },
{ path: '', component:InicioComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
