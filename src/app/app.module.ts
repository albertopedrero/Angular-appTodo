import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';


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
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
