import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generaciones',
  templateUrl: './generaciones.component.html',
  styleUrl: './generaciones.component.css'
})
//La clase implementa la interfaz OnInit
export class GeneracionesComponent implements OnInit {

  //Crea un array para la lista de generaciones
  listaGeneraciones = ["Generación I", "Generación II", "Generación III",
   "Generación IV", "Generación V", "Generación VI", "Generación VII"];

  constructor() { }

  //Método de OnInit
  ngOnInit(): void {

  }
}
