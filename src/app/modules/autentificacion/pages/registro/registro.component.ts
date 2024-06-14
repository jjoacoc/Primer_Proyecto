import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//servicio de autentificacion
import { AuthService } from '../../services/auth.service';
//servicio de rutas que otorga angular
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
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
  };

  //CREAR UNA COLECCION PARA USUARIOS
  coleccionUsuarios: Usuario[] = [];

  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router,
    public servicioFirestore: FirestoreService
  ) {}

  //FUNCION PARA EL REGISTRO
  async registrar() {
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password,
    };

    const res = await this.servicioAuth
      .registrar(credenciales.email, credenciales.password)
      //el metodo then nos devuelve la respuesta esperada por la promesa
      .then((res) => {
        alert('Ha agregado un usuario con exito ');
        //accedemos al servicio de turas -> metodo navigate
        //metodo navigate = permite dirigirnos a diferentes vistas
        this.servicioRutas.navigate(['/inicio']);
      })

      .catch((error) => {
        alert('Hubo un problema al registrar un nuevo usuario :(');
      });

      const uid = await this.servicioAuth.obtenerUid();

      this.usuarios.uid = uid

      this.guardarUsuario();
    //llamamos a la funcion limpiarimputs() para que limpie los imputs
    this.limpiarInputs();
  }

  //funcion para agregar NUEVO USUARIO
  async guardarUsuario() {
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios);
    })
    .catch(err => {
      console.log('Error =>',err)
    })
  }

  limpiarInputs() {
    const inputs = {
      email: (this.usuarios.email = ''),
      password: (this.usuarios.password = ''),
      uid: (this.usuarios.uid = ''),
      apellido: (this.usuarios.apellido = ''),
      nombre: (this.usuarios.nombre = ''),
      rol: (this.usuarios.rol = ''),
    };
  }
}
