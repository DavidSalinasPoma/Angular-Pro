// Este esta siendo tratado como un componente hijo

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  // Cambiando el nombre de la propiedad progreso a valor
  // @Input('valor') progreso: number = 50;
  @Input('valor') progreso: number = 50; // Recibiendo datos del padre
  // Cambiando los estilos desde el padre al hijo
  @Input() btnClass: string = 'btn-primary';


  // Emitir eventos Enviando datos a padre
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter(); // EventEmiterncesita saber que tipos de dtos maneja

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }
  // Este metodo cabia el valor de progreso
  /**
   * cambiarValor
   */
  public cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100
    }
    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(nuevoValor: number) {

    this.valorSalida.emit(this.progreso);

    if (nuevoValor >= 100) {
      this.progreso = 100;

    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

  }
}
