/**pokemons.component.ts */

//Importaciones
import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services//pokemons.service';
import { FormBuscarPokemon } from '../models/form-buscar-pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

//La clase implementa la interfaz OnInit
export class PokemonsComponent implements OnInit {
  pokemonSeleccionado = ''; // Variable para almacenar el nombre del pokemon seleccionado
  pokemon = [{ // Arreglo para almacenar información de los pokemons
    'id': '', 'nombre': '', 'categoria': '', 'tipo': '', 'talla': 0.0, 'peso': 0.0, 'imagen': ''
  }];
  cuenta = 0; // Variable para almacenar el número total de pokemons
  // Instancia del modelo FormBuscarPokemon para el formulario de búsqueda
  formBuscarPokemon = new FormBuscarPokemon(""); 

  // Constructor del componente, inyecta el servicio PokemonsService
  constructor(private servicePokemons: PokemonsService) { }

  // Método OnInit, se ejecuta al iniciar el componente
  ngOnInit() {
    // Obtiene la lista de pokemons del servicio
    this.pokemon = this.servicePokemons.getPokemons(); 
    // Obtiene el número total de pokemons del servicio
    this.cuenta = this.servicePokemons.contarPokemons(); 
  }

  // Método para buscar un pokemon por su nombre
  buscar(nombreDelPokemon: string) {
    // Usa el servicio para buscar el pokemon
    this.pokemon = this.servicePokemons.buscarPokemon(nombreDelPokemon); 
  }

  // Método para cancelar la búsqueda y restaurar la lista original de pokemons
  cancelarBuscar() {
    this.pokemon = this.servicePokemons.getPokemons(); // Obtiene la lista original de pokemons
    this.formBuscarPokemon.setNombre(''); // Limpia el campo de búsqueda en el formulario
  }
}


