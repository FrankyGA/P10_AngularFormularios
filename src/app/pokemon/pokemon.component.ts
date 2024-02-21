/**pokemon.component.ts */

import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent {
  @Input() pokemon = {
    'id': '', 'nombre': '', 'categoria': '', 'tipo': '', 'talla': 0.0, 'peso': 0.0, 'imagen': ''
  };

  /**
   * Añadimos el método TypeScript que emite un evento de tipo EventEmitter. Este
  evento es el parámetro de salida (@output) del componente hijo y será transmitido
  al padre
   */
  //Creamos variable con decorador para el evento
  @Output() eventoClicImagen = new EventEmitter();

  clickEnImagen() {
    this.eventoClicImagen.emit(this.pokemon.nombre);
  }
}

