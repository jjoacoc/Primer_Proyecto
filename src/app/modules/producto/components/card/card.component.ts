import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // Definimos coleccion local de productos
  coleccionProductos: Producto[] = [];

  // Variable local para obtener producto seleccionado
  productoSeleccionado!: Producto;

  // Variable para manejar estado de un modal
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService) { }


  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  // Funcion para modal que muestre la informacion de un producto en especifico
  mostrarVer(info: Producto) {

    // Habilita visibilidad de modal
    this.modalVisible = true;

    // Guarda informacion de un producto elegido por el usuario
    this.productoSeleccionado = info;
  }

}
