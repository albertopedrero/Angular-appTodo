import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {

   listaTareas;


  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
    this.listaTareas = this.tareasService.obtenerTareas();
  }

}
