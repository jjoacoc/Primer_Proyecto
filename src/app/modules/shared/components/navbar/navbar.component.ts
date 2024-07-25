import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logueado = true; // Variable booleana para el boton de registro e Inicio de sesion
  deslogueado = false; // Variable booleana para el boton de Cerrar sesion

  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ) { }

  // Cambia los valores del logeado y deslogueado para ocultar los primeros y mostrar el ultimo
  iniciar(){
    this.logueado = false;
    this.deslogueado = true;
  }

  cerrarSesion(){
    this.deslogueado = false;
    // Va a eliminar el "token" actual del usuario
    // token: 
    this.servicioAuth.cerrarSesion();

    this.servicioRutas.navigate(['/']); //redirigimos a la raiz de la pagina
    this.logueado = true;
  }

  

}
