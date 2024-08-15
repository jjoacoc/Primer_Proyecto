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

  // Variable para manejar el estado de Edicion y Eliminacion de productos
  modalVisibleProducto: boolean = false;

  // Variable va a tomar el producto que nosotros elijamos
  productoSeleccionado!: Producto;  // <- permite recibir valores vacios

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
          this.producto.reset();
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

  // Funcion para alertar al usuario del producto que desea eliminar
  mostrarBorrar(productoSeleccionado: Producto) {
    this.modalVisibleProducto = true; //abre el modal

    this.productoSeleccionado = productoSeleccionado; // toma los valores del producto elegido
  }

  // Funcion para eliminar definitivamente al producto
  borrarProducto() {
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
      .then(respuesta => {
        Swal.fire({
          title: "Buen Trabajo!",
          text: "Se ha eliminado con Exito!",
          icon: "success"
        });
      })
      .catch(error => {
        Swal.fire({
          title: "Oh No!",
          text: "Ha ocurrido un Error \n" + error,
          icon: "error"
        });
      })
  }

  mostrarEditar(productoSeleccionado: Producto){
    this.productoSeleccionado = productoSeleccionado
    //Enviar o "setear" los nuevos valores y reasignarlos a las variables
    //El ID no se vuelve a enviar ni se modifica, por ende no lo llamamos
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion:productoSeleccionado.descripcion,
      categoria:productoSeleccionado.categoria,
      imagen:productoSeleccionado.imagen,
      alt: productoSeleccionado.alt,
    })
  }


  editarProducto() {
    let datos: Producto = {
      //Solo el ID toma y deja igual su valor
      idProducto: this.productoSeleccionado.idProducto,
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!
    }

    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
    .then(producto => {
      Swal.fire({
        title: "Buen Trabajo!",
        text: "Se ha modificado con Exito!",
        icon: "success"
      });
    })
    .catch(error => {
      Swal.fire({
        title: "Oh No!",
        text: "Ha ocurrido un Error al modificar el producto",
        icon: "error"
      });
    })
  }
  
}
