import { Component, OnInit } from '@angular/core';

// servicio
import { SettingsService } from 'src/app/services/settings.service';



@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {


  constructor(private settingServices: SettingsService) { }

  ngOnInit(): void {
    this.settingServices.checkCurrenTheme();
    this.settingServices.persistenciaCheck();
  }

  // Metodo que cambia el tema de colores
  public changeTheme(theme: string) {

    this.settingServices.changeTheme(theme);

  }



}
