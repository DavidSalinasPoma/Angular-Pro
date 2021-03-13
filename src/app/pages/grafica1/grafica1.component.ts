
// Componente padre para dona.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  // Mandar datos al componente Dona
  public labels1: string[] = ['Download Ventas', 'In-Store Ventas', 'Mail-Order Ventas'];
  public data1 = [
    [150, 250, 50]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
