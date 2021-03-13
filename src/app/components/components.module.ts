import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { FormsModule } from '@angular/forms';

// Modulos
import { ChartsModule } from 'ng2-charts';

// Este componente se va a utilizar en los pages
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';

@NgModule({
  declarations: [IncrementadorComponent, DonaComponent],
  imports: [
    CommonModule,
    FormsModule,
    // Plugins
    ChartsModule,
  ],
  // Por si se necesita utilizar en otro modulo
  exports: [IncrementadorComponent, DonaComponent]
})
export class ComponentsModule { }
