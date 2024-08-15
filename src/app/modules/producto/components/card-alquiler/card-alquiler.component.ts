import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-alquiler',
  templateUrl: './card-alquiler.component.html',
  styleUrls: ['./card-alquiler.component.css']
})
export class CardAlquilerComponent {

  // Coleccion de todos los productos
  coleccionProductos: Producto [] = [];

  // Coleccion de solo productos categoria "alquiler"
  coleccionAlquiler: Producto [] = [];

  productoSeleccionado!: Producto;

  modalVisible:boolean = false;

  constructor(public servicioCrud: CrudService) {}

  ngOnInit (): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
    // Mostrar la coleccion actual de alquileres
  }

  // Funcion para filtrar productos del tipo "alquileres"
  mostrarProductoAlquiler(){
    this.coleccionProductos.forEach(producto => {
      // Si la categoria del producto es igual a "alquiler", se enviara a la 
      // Coleccion de alquileres especifica
      if(producto.categoria === "alquiler"){
        // .push sube o agrega un item a una coleccion
        this.coleccionAlquiler.push(producto);
      }
    })
  }

  // Muestra informacion completa de un producto elegido por el usuario
  mostrarVer(info: Producto){
    this.modalVisible = true;
    
    this.productoSeleccionado = info;

  }

}
