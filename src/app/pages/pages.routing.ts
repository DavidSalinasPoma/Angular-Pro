
// Modulos de la rutas
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes de las rutas
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';



// Definiendo la rutas de modulo Pages
const routes: Routes = [

    // Ruta Padre 1
    // Configurando las rutas hijas del este componente
    {

        // Colocar rutas a partir de un path
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafica1', component: Grafica1Component },
            // Cuando la ruta va a ser vacio va aredireccionar al dashboard 
            // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
