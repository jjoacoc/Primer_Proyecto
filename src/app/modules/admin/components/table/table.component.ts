import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  coleccionProductos: Producto[] = [];

  //Definimos formularios para los productos

  /*
  * Atributos alfanumeros (string) se inicializan con comillas simples
  * Atributos numeros (number) se inicializan con cero ('0')
  */

  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
  })

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto() {
    // validamos los valores del producto agregado
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        //idProducto no se toma porque es generado por la BD y no por el usuario
        idProducto: '',
        // el resto es tomado con informacion ingresada por el usuario
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!
      }

      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          Swal.fire({
            icon: "success",
            title: "Buen Trabajo!",
            text: "Se agrego un Producto con exito",
          });
        })
        .catch(error => {
          Swal.fire({
            icon: "error",
            title: "Oh no!",
            text: "Hubo un problema al Crear un Producto",
          });
        })
    }
  }
}
