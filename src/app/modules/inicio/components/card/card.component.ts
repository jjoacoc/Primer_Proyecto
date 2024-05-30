import { Component } from '@angular/core';

//IMPORTAMOS INTERFAZ
import { Tienda } from 'src/app/models/tienda';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //PROPIEDAD PUBLICA (TIPO ARRAY)
  public info: Tienda[];

  constructor(){
    this.info = [
      {
        id: "1",
        nombre:"Melisa la quinta",
        imagen: "https://static.hosteltur.com/app/public/uploads/img/articles/2015/10/01/L_5b14ffa1f00f2_MelialaquintaGolf.jpg",
        alt: "un hotel",
        parrafo: "un hotel. de 3 estrellas. sin estacionamiento."
      },
      {

        id: "1",
        nombre:"Hotel Mansion House",
        imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/58306284.jpg?k=b833ca13ebe996b70fccfdc91212741c30db8b8171104af43d313bbfc970a8e3&o=&hp=1",
        alt: "un hotel",
        parrafo: "un hotel. de 3 estrellas. sin estacionamiento."
      },
      {
        
        id: "1",
        nombre:"Hotel Mansion del Cupatitzio",
        imagen: "https://hotelmansiondelcupatitzio.com/wp-content/uploads/2020/05/IMG_5629-scaled.jpg",
        alt: "un hotel",
        parrafo: "un hotel. de 3 estrellas. sin estacionamiento."

      }
    ]
  }
}
