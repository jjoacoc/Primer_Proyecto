import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//servicio de autentificacion
import { AuthService } from '../../services/auth.service';
//servicio de rutas que oorga angular
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  //este "hide" es para el input de contraseña
  hide = true;

  //IMPORTACION DEL MODELO /INTERFAZ
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  //CREAR UNA COLECCION PARA USUARIOS
  coleccionUsuarios: Usuario[] = []

  constructor(public servicioAuth: AuthService,
    public servicioRutas: Router
  ){
  }

  //FUNCION PARA EL REGISTRO
  async registrar() {
    //#########################################################################################################
    // const credenciales = {
    //   uid: this.usuarios.uid,
    //   nombre: this.usuarios.nombre,
    //   apellido: this.usuarios.apellido,
    //   email: this.usuarios.email,
    //   rol: this.usuarios.rol,
    //   password: this.usuarios.password,
    // }

    //#########################################################################################################
    // //enviamos los nuevos registros por medio del metodo push a la coleccion
    // this.coleccionUsuarios.push(credenciales)
    // por consola
    // console.log(credenciales)
    // console.log(this.coleccionUsuarios)
    //   alert("Registro exitoso")

    //#########################################################################################################
      const credenciales = {
        email: this.usuarios.email,
        password: this.usuarios.password
      } 

      const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
      //el metodo then nos devuelve la respuesta esperada por la promesa
      .then(res => {
        alert('Ha agregado un usuario con exito ')
        //accedemos al servicio de turas -> metodo navigate
        //metodo navigate = permite dirigirnos a diferentes vistas
        this.servicioRutas.navigate(['/inicio'])

      })
      
      .catch(error => {
        alert('Hubo un problema al registrar un nuevo usuario :(')
      })
      //llamamos a la funcion limpiarimputs() para que limpie los imputs
      this.limpiarInputs()
  }

  
  limpiarInputs(){
    const inputs = {
      email: this.usuarios.email = '',
      password: this.usuarios.password = '',
      uid: this.usuarios.uid = '',
      apellido: this.usuarios.apellido = '',
      nombre: this.usuarios.nombre = '',
      rol: this.usuarios.rol = '',
    }
  }
}
