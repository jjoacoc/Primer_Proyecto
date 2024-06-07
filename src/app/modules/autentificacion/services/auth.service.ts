import { Injectable } from '@angular/core';
//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Referenciar auth de firebase para inicializarlo
  constructor(public auth: AngularFireAuth) { }

  //Funcion para tomar UID

  //Funcion para REGISTRO
  registrar(email:string, password:string){
    //retorna nueva informacion de email y contraseña
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  //Funcion para INICIO DE SESION
  iniciarSesion(email:string,password:string){
    //validar email y la contraseña
    return this.auth.signInWithEmailAndPassword(email, password)
  }
  //Funcion para CERRAR SESION
  cerrarSesion(){
    //devolver promesa vacia
    return this.auth.signOut()
  }
}
