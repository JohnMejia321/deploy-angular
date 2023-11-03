import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../RestauranteService';

@Component({
  selector: 'app-pedir-plato',
  templateUrl: './pedir-plato.component.html',
  styleUrls: ['./pedir-plato.component.css']
})
export class PedirPlatoComponent implements OnInit {


  platoAleatorio: any; // Propiedad para almacenar el plato aleatorio

  constructor(private restauranteService:RestauranteService) {}


  ngOnInit() {
    // Este código se ejecutará cuando el componente se cargue
    console.log(this.platoAleatorio)
   
  }


  pedirPlato() {
    // Realiza una solicitud para obtener un plato aleatorio
    this.restauranteService.hacerPedido().subscribe(
      (plato) => {
        this.platoAleatorio = plato;
        this.platoAleatorio.ingredientes = this.getIngredientes(this.platoAleatorio.ingredientes);
      },
      (error) => {
        console.error('Error al obtener el plato aleatorio:', error);
      }
    );
  }

  getIngredientes(ingredientes: any) {
    // Convierte el objeto de ingredientes en un array de objetos con nombre y cantidad
    return Object.keys(ingredientes).map((nombre) => ({
      nombre,
      cantidad: ingredientes[nombre]
    }));
  }
  
  }
