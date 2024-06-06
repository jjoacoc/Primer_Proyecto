import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

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

  //FUNCION PARA EL REGISTRO
  registrar() {
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
    // por consola
    console.log(credenciales)
    console.log(this.coleccionUsuarios)
      alert("Registro exitoso")
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
