import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
})
export class InicioSesionComponent {
  //este "hide" es para el input de contraseña
  hide = true;
  //###########################################LOCAL####################################################################
  /*
  declaro la variable credenciales con el arreglo Usuario

  public credenciales: Usuario[];

  creo un constructor que va a entrar a el arreglo de la variable credenciales y va a almacenar 2 objetos de ejemplos de usuario
  constructor(
    
  ) {
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
  console.log(this.credenciales)

  }

  creo un objeto usuarios que va a recibir toda la informacion que envie con el boton de el html en este caso solo email y password
  */
  //##############################################FIN LOCAL###############################################################

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) {}

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  };

  /*
  FUNCION PARA EL REGISTRO
  funcion flecha que declara la variable comprobar y se mete en el arreglo credenciales en el cual crea una variable "temporal" llamada busca que va a decir si busca en el objeto usuario el email y esto es = a el email de el arreglo credenciales entonces tambien va a buscar si la contraseña es la misma de el arreglo y si es la misma va a tirar en la consola el objeto completo de el arreglo con todos sus datos
  */

  //############################################INICIO DE SESION########################################################

  async comprobacion() {
    /*
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
        */

    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password,
    };

    try{
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email);

      // ! -> si es diferente
      // .empty -> metodo de firebase para marcar si algo es vacio
      if(!usuarioBD || usuarioBD.empty){
        
        Swal.fire({
          title: "Oh No!",
          text: "Ese Correo no esta Registrado!",
          icon: "error"
        });

        this.limpiarInputs();
        return;
      }

      //Primer documento (registro) en la coleccion de usuarios que se obtiene desde la consulta.
      const usuarioDoc = usuarioBD.docs[0];

      /*
      * Extrae los datos del documento en forma de un objeto y se especifica como de tipo
      * 'Usuario -> haciendo referencia a nuestra interfaz de Usuario.
      */
      const usuarioData = usuarioDoc.data() as Usuario

      // Hash de la contraseña ingresada por el usuario
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

      if(hashedPassword !== usuarioData.password){

        Swal.fire({
          title: "Oh No!",
          text: "Contraseña Incorrecta!",
          icon: "error"
        });
        
        this.usuarios.password = '';
        return;
      }

      const res = await this.servicioAuth
      .iniciarSesion(credenciales.email, credenciales.password)
      .then((res) => {
        
        Swal.fire({
          title: "Buen Trabajo!",
          text: "Se ha Logeado con Exito!",
          icon: "success"
        });

        this.servicioRutas.navigate(['/inicio']);
      })
      .catch((err) => {
        
        Swal.fire({
          title: "Oh No!",
          text: "Ha Ocurrido un Error al Inicar Sesion!",
          icon: "error"
        });

        this.limpiarInputs();
      });
    }catch(error){
      this.limpiarInputs();
    }
}

  limpiarInputs() {
    const inputs = {
      email: (this.usuarios.email = ''),
      password: (this.usuarios.password = ''),
    };
  }
}
  //############################################FIN INICIO DE SESION#####################################################

