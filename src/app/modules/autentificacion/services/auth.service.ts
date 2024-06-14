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
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  //Funcion para CERRAR SESION
  cerrarSesion(){
    //devolver promesa vacia
    return this.auth.signOut();
  }
  //Funcion para tomar UID
  async obtenerUid(){
    //Nos va a generar una promesa, y la constante la va a capturar
    const user = await this.auth.currentUser;
    /*
    * Si el usuario no respeta la estructura de la interfaz / 
    * Si tuvo problemas para el registro -> ej: mal internet
    */
    if(user==null){
      return null;
    }else{
      return user.uid;
    }
  }
}
