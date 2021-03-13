import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tarea } from '../modelos/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  
  constructor( private firestore: AngularFirestore  ) {}

  obtenerTareas(): Observable<any[]>{
    return this.firestore.collection('tareas').snapshotChanges();
  }

  anadirTarea(tarea: Tarea){
    let nuevaTarea = Object.assign( {}, {'nombre': tarea, 'completada': false});
    return this.firestore.collection('tareas').add(nuevaTarea);
  }

  eliminarTarea(tarea:Tarea){
    this.firestore.doc('tareas/' + tarea.id).delete();
    // O también
    // this.firestore.collection('tareas').doc(tarea.id).delete();
  }

  modificarTarea(tarea:Tarea){
    this.firestore.collection('tareas')
          .doc(tarea.id)
          .set({completada: !tarea.completada }, { merge: true});
  }
}


