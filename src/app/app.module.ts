
// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos personalizados
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

// Componentes
import { AppComponent } from './app.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';




// 1.- Los componenets van en declarations
// 2.- Los Modulos van en imports


@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
