/**pokemons.service.ts */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  //Creamos array con los datos de los pokemons
  pokemons = [
    {
      id: '001', nombre: 'Bulbasaur', categoria: 'Planta y Venenosa',
      tipo: 'Planta', talla: 0.7, peso: 6.9, 'imagen': "./assets/1.png"
    },
    {
      id: '002', nombre: 'Ivysaur', categoria: 'Planta y Venenosa',
      tipo: 'Planta', talla: 1, peso: 13, 'imagen': "./assets/2.png"
    },
    {
      id: '003', nombre: 'Venusaur', categoria: 'Planta y Venenosa',
      tipo: 'Planta', talla: 2, peso: 100, 'imagen': "./assets/3.png"
    },
    {
      id: '004', nombre: 'Charmander', categoria: 'Fuego',
      tipo: 'Fuego', talla: 0.6, peso: 8.5, 'imagen': "./assets/4.png"
    },
    {
      id: '005', nombre: 'Charmaleon', categoria: 'Fuego',
      tipo: 'Fuego', talla: 1.1, peso: 19, 'imagen': "./assets/5.png"
    },
    {
      id: '006', nombre: 'Charizard', categoria: 'Fuego y Vuelo',
      tipo: 'Fuego', talla: 1.7, peso: 90.5, 'imagen': "./assets/6.png"
    }
  ];

  constructor() { }

  //Devuelve los registros
  getPokemons() {
    return this.pokemons;
  }

  //Método que recuenta 
  contarPokemons() {
    return this.pokemons.length;
  }

  // Método para buscar un pokemon por su nombre
  buscarPokemon(nombreDelPokemon: string) {
    // Crea una expresión regular 
    //para realizar la búsqueda de forma insensible a mayúsculas y minúsculas
    let regex = new RegExp(nombreDelPokemon, 'gi');
    // Filtra los pokemons cuyo nombre coincide con la expresión regular
    return this.pokemons.filter(pokemon => pokemon.nombre.match(regex));
  }

}





