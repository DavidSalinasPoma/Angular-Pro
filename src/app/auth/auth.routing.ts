// Modulos
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes de estas rutas
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

    // Ruta Padre 2
    { path: 'register', component: RegisterComponent },
    // Ruta Padre 3
    { path: 'login', component: LoginComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
