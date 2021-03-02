import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Atributos de la clase
  public year = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}