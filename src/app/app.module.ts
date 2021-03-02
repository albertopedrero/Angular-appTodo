import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { TareaComponent } from './componentes/tarea/tarea.component';
import { NuevaTareaComponent } from './componentes/nueva-tarea/nueva-tarea.component';
import { ListadoTareasComponent } from './componentes/listado-tareas/listado-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    TareaComponent,
    NuevaTareaComponent,
    ListadoTareasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
