import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

// Rutas
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [


  // path:'/dashboard' pagesRouting
  // path:'/auth' AuthRouting
  // path:'/medicos' MedicosRouting
  // path:'/compras' ComprasRouting

  // Cuando la ruta va a ser vacio va aredireccionar al dashboard 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Ruta Padre 4
  // Cuando se equivoquen de escribir una ruta
  { path: '**', component: NopagesfoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    // Rutas tomadas
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [
    RouterModule // Es para que pueda ser utilizado en todos los modulos
  ]
})
export class AppRoutingModule { }
