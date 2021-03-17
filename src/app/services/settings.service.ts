//  Servicio para que el componente quede limpio Componente accountSetting y pagesComponent queden limpios.
import { Injectable } from '@angular/core';

// Interface para el event
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Injectable({
  providedIn: 'root' // Esto permite utilizarlo en culquier modulo
})
export class SettingsService {

  // Atributos de la clase Sercio settings
  public linkTheme = document.querySelector('#theme');


  constructor() {
    this.persistenciaThemeCheck();
  }

  // Metodo de persistencia del thema y el check al iniciar la app de angular
  /**
   * persisThemeCheck del pages Component
   */
  public persistenciaThemeCheck() {
    const url = localStorage.getItem('theme');
    // para el cambio del color
    if (url === null) {
      // Selecionamos un thema por defecto
      const url = `./assets/css/colors/default-dark.css`;
      // Cambiando los href por la nueva url
      this.linkTheme.setAttribute('href', url);
    } else {
      const url = localStorage.getItem('theme');
      // Cambiando los href por la nueva url
      this.linkTheme.setAttribute('href', url);
    }
    // Para que persista elcheck
    const check = localStorage.getItem('check');
    if (check === null) {
      // Persistencia check
      localStorage.setItem('check', 'default-dark');
    }
  }

  // ****Logica AccountSettings components*****

  // Metodo que cambia el tema de colores
  public changeTheme(theme: string) {

    // Seleccionando el id unica de toda la app
    const url = `./assets/css/colors/${theme}.css`;

    // Cambiando los href por la nueva url
    this.linkTheme.setAttribute('href', url);

    //  Persistencia de la configuracion del thema
    localStorage.setItem('theme', url);

  }

  // Controlar el check de los botones
  /**
   * checkCurrenTheme
   */
  public checkCurrenTheme() {
    // Para eliminar una clase
    const deleteClase = document.querySelectorAll('.selector');

    // Delegation
    const delegation = document.querySelector('.delegation');

    delegation.addEventListener('click', check);

    function check(event: HtmlInputEvent) {
      console.log('hola mundo');

      // console.log(event.target.classList.contains('selector'));
      if (event.target.classList.contains('selector')) {

        // Eliminando la clase working
        deleteClase.forEach(element => {
          element.classList.remove('working');
        });

        // Seleccionando el elemento "a"
        const ancor = event.target;
        // Agregando la clase
        ancor.classList.add('working');

        // Guardando el data-theme
        const dataTheme = ancor.getAttribute('data-theme');
        // console.log(dataTheme);

        // Agregando al local storage para la persistencia de configuraciones
        localStorage.setItem('check', dataTheme);

      }

    }

  }

  /**
   * PersistenciaCheck
   */
  public persistenciaCheck() {

    // selecionando todos los ancors
    const ancors = document.querySelectorAll('.selector');

    ancors.forEach(element => {
      if (element.getAttribute('data-theme') === localStorage.getItem('check')) {
        element.classList.add('working');
      }
    });

  }


}
