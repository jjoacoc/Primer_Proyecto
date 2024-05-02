import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

//INICIO - PAGINA INTERFAZ DEL USUARIO
import { InicioComponent } from './pages/inicio/inicio.component';

//COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';

//COMPONENTES QUE IMPORTAMOS DESDE MATERIAL
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
