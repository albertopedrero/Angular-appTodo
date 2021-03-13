import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TareasService } from 'src/app/servicios/tareas.service';

import { Tarea } from '../../modelos/tarea.model';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {

   listaTareas: Tarea[];


  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
    this.tareasService.obtenerTareas()
      .subscribe( tareas => {
        this.listaTareas = tareas.map (t => {
          return {
            id: t.payload.doc.id,
            ...t.payload.doc.data() 
          }; 
        });
      });
  }

}
