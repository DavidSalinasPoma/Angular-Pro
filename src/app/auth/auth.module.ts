import { NgModule } from '@angular/core';
// Modulos
import { CommonModule } from '@angular/common';

// Componentes de este modulo
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ // Para que puedan ser urtilizados en otros modulos
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthModule { }
