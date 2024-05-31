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

  // public credenciales: Usuario[];


  // constructor(){
  //   this.credenciales = [
  //     {
  //       nombre: 'pepe',
  //       apellido: 'asd',
  //       rol: 'administador',
  //       email: '123',
  //       uid: '',
  //       password: '123456',
  //     },
  //     {
  //       nombre: 'pepe',
  //       apellido: 'asd',
  //       rol: 'administador',
  //       email: '123@gmail.com',
  //       uid: '',
  //       password: '1234562',
  //     }
  //   ]
  // }

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  coleccionUsuarios: Usuario[] = []

  Inicio() {
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password,
    }
    //enviamos los nuevos registros por medio del metodo push a la coleccion
    this.coleccionUsuarios.push(credenciales)
    console.log(credenciales)
  }

  //FUNCION PARA EL REGISTRO
  comprobacion() {
    const comprobar = this.coleccionUsuarios.find((busca) => busca.nombre === this.usuarios.nombre && this.usuarios.password)
    console.log(comprobar)
  }

}
