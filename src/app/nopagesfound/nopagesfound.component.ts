import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagesfound',
  templateUrl: './nopagesfound.component.html',
  styleUrls: ['./nopagesfound.component.css']
})
export class NopagesfoundComponent implements OnInit {

  // cambiando en año de el footer
  public year = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
