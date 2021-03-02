import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  listaTareas=[
    {
      nombre: 'Comprar tinta impresora',
      completada: false
    },
    {
      nombre: 'Renovar libros biblioteca',
      completada: false
    },
    {
      nombre: 'Completar trabajo SPW',
      completada: false
    },
    {
      nombre: 'Felicitar primo',
      completada: false
    }
  ]

  constructor() { }

  obtenerTareas(){
    return this.listaTareas;
  }

  anadirTarea(tarea){
    let nuevaTarea = {
      nombre: tarea,
      completada: false
    }
    this.listaTareas.unshift(nuevaTarea);
  }

  eliminarTarea(tarea){
    let posicion = this.listaTareas.findIndex( t => t.nombre === tarea.nombre);
    //                              function(t) { return t.nombre === tarea.nombre }

    this.listaTareas.splice(posicion, 1);

  }

  modificarTarea(tarea){
    let posicion = this.listaTareas.findIndex( t => t.nombre === tarea.nombre);
    this.listaTareas[posicion].completada = ! this.listaTareas[posicion].completada;
  }
}
