import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

//COMPONENTES DE ANGULAR

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroComponent,
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,

    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,

    //formsmodule
    FormsModule
  ],
  exports: [
    RegistroComponent,
    InicioSesionComponent,
  ]
})
export class AutentificacionModule { }
