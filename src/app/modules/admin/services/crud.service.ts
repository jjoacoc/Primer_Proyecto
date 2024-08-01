import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Producto } from 'src/app/models/producto';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    // Referenciamos coleccion productos y sera subida como "producto" a Firebase
    this.productosCollection = database.collection('producto');
  }

  //CREAR productos
  crearProducto(producto: Producto) {
    return new Promise(async (resolve, reject) => {
      try {

        //Creamos numero identificativo para el producto en la base de datos
        const idProducto = this.database.createId();

        //Asignamos ID creado al atributo idProducto de la interfaz "Producto"
        producto.idProducto = idProducto;

        const resultado = await this.productosCollection.doc(idProducto).set(producto);

        resolve(resultado);
      } catch (error) {
        reject(error);
      }
    })
  }
  //OBTENER productos
  //EDITAR productos
  //ELIMINAR productos

}
