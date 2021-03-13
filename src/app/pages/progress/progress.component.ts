// Componente PADRE

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent implements OnInit {

  progreso1: number = 25;
  progreso2: number = 35;


  constructor() { }

  ngOnInit(): void {
  }



  public get getProgerso1(): string {
    return `${this.progreso1}%`;
  }

  public get getProgerso2(): string {
    return `${this.progreso2}%`;
  }

  // Recibiendo datos del hijo
  /**
   * valorSalida
   */
  public cambioValorHijo(valor: number) {
    console.log('heyy!! ', valor);

  }
}
