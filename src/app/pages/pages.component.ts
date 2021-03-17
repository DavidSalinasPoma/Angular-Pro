import { Component, OnInit } from '@angular/core';

// Servicio global
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  // Atributos de la clase
  public linkTheme = document.querySelector('#theme');

  constructor(private settingServices: SettingsService) { }

  ngOnInit(): void {
    this.settingServices.persistenciaThemeCheck();
  }

}
