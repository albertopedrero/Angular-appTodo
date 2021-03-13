import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appTodo';

  
  constructor(){
    const tarea = {
      nombre: 'tarea 1',
      completado: false,
      prioridad: 'alta',
      autor: 'yo'
    };

    const { nombre, completado, ...resto } = tarea;
    console.log(nombre);
    console.log(completado);
    console.log(resto);
  }
  
}