import { Injectable } from '@angular/core';
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
}
