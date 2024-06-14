import { Injectable, resolveForwardRef } from '@angular/core';
//Importamos Firestore y colecciones de la misma
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  /*
  * Definimos una coleccion de usuarios Privada
  * Va a ser una coleccion de Firestore
  * Respetara la estructura de datos de la interfaz Usuario
  */

  private usuarioCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) { 
    this.usuarioCollection = this.database.collection<Usuario>('usuarios')
  }

  agregarUsuario(usuario: Usuario, id: string){
    /*
    * RESOLVE: promesa resuleta -> funciona correctamente
    * REJECT: promesa rechazada -> ocurrio una falla
    */
    return new Promise(async (resolve, reject)=> {
      //Bloque TRY encapsula la logica resuelta
      try{
        usuario.uid = id;

        /*
        * const resultado = coleccion de usuarios, envia como documento el UID
        * y setea la informacion que ingresemos en el REGISTRO
        */ 

        const resultado = await this.usuarioCollection.doc(id).set(usuario);
        resolve(resultado);
        //Bloque CATCH encapsula una falla y la vuelve un error
      }catch(error){
        reject(error);
      }
    })
  }
}
