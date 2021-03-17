
// Modulos para este modulo
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos personalizados
import { SharedModule } from '../shared/shared.module';

// Rutas 
import { RouterModule } from '@angular/router';

// Importando formularios reactivos
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';


// Componentes para este modulo
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';





@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // Modulos personalizados
    SharedModule,
    RouterModule,
    ComponentsModule
  ],
  // Se exporta por si se requiere utilizar en algun modulo
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
  ]
})
export class PagesModule { }
