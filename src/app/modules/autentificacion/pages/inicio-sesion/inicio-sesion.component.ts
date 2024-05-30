import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

  //este "hide" es para el input de contraseña
  hide = true;

  public comprobar: Usuario[];


  constructor(){
    this.comprobar = [
      {
        nombre: 'pepe',
        apellido: 'asd',
        rol: 'administador',
        email: '123',
        uid: '',
        password: '123456',
      },
    ]

  }


  // //FUNCION PARA EL REGISTRO
  // comprobacion() {
  //   const credenciales = {
  //     uid: this.usuarios.uid,
  //     nombre: this.usuarios.nombre,
  //     apellido: this.usuarios.apellido,
  //     email: this.usuarios.email,
  //     rol: this.usuarios.rol,
  //     password: this.usuarios.password,
  //   }
    // por consola

  }

