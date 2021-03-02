import { Component, Input, OnInit } from '@angular/core';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() tarea;

  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
  }

  eliminarTarea(tarea){
    this.tareasService.eliminarTarea(tarea);
  }

  modificarTarea(tarea){
    this.tareasService.modificarTarea(tarea);
  }

}
