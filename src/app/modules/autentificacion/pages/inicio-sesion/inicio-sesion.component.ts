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

  //declaro la variable credenciales con el arreglo Usuario
  public credenciales: Usuario[];

  //creo un constructor que va a entrar a el arreglo de la variable credenciales y va a almacenar 2 objetos de ejemplos de usuario
  constructor() {
    this.credenciales = [
      {
        nombre: 'pepe',
        apellido: 'asd',
        rol: 'administador',
        email: '123',
        uid: '',
        password: '123456',
      },
      {
        nombre: 'pepe',
        apellido: 'asd',
        rol: 'administador',
        email: 'jjoaco.cofre@gmail.com',
        uid: '',
        password: '1234562',
      }
    ]
    // console.log(this.credenciales)

  }

  //creo un objeto usuarios que va a recibir toda la informacion que envie con el boton de el html en este caso solo email y password
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  //FUNCION PARA EL REGISTRO
  //funcion flecha que declara la variable comprobar y se mete en el arreglo credenciales en el cual crea una variable "temporal" llamada busca que va a decir si busca en el objeto usuario el email y esto es = a el email de el arreglo credenciales entonces tambien va a buscar si la contraseña es la misma de el arreglo y si es la misma va a tirar en la consola el objeto completo de el arreglo con todos sus datos

  comprobacion() {
    const comprobar = this.credenciales.find((busca) => busca.email === this.usuarios.email && this.usuarios.password === busca.password)

    if (comprobar) {
      alert("Inicio de sesion exitoso")
      this.limpiarInputs()
    }else{
      alert("Datos Incorrectos")
    }
  }

  limpiarInputs(){
    const inputs = {
      email: this.usuarios.email = '',
      password: this.usuarios.password = '',
    }
  }

}
