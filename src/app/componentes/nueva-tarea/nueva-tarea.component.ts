import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
  }
  anadirTarea(tarea){
    this.tareasService.anadirTarea(tarea.value);
    tarea.value="";
  }

}
