import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
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

  obtenerProducto() {
    //snapshotChanges -> toma una captura del estado de los datos
    //pipe -> funciona como una tuberia, que retorna el nuevo arreglo de datos
    //map -> "mapea" o recorre esa nueva informacion
    //a -> resguarda la nueva informacion y la envia
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())));
  }
  //EDITAR productos

  modificarProducto(idProducto: string, nuevaData: Producto){
    //accedemos a la coleccion, buscamos por la ID y actualizamos informacion
    return this.database.collection('producto').doc(idProducto).update(nuevaData);
  }

  //ELIMINAR productos

  eliminarProducto(idProducto: string) {
    return new Promise((resolve, reject) => {
      try {
        //accedo a la coleccion, busco su ID y lo elimino
        const respuesta = this.productosCollection.doc(idProducto).delete();
        resolve(respuesta)
      }
      catch(error){
        reject(error)
      }
    })
  }

}
