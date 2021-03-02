import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';

// Rutas
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  // Ruta Padre 1
  // Configurando las rutas hijas del este componente
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      // Cuando la ruta va a ser vacio va aredireccionar al dashboard 
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },


  // Ruta Padre 2
  { path: 'register', component: RegisterComponent },
  // Ruta Padre 3
  { path: 'login', component: LoginComponent },

  // Cuando la ruta va a ser vacio va aredireccionar al dashboard 
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Ruta Padre 4
  // Cuando se equivoquen de escribir una ruta
  { path: '**', component: NopagesfoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule // Es para que pueda ser utilizado en todos los modulos
  ]
})
export class AppRoutingModule { }
