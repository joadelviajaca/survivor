import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './interfaces/Task.interface';
import { TaskDetail } from "./task/task-detail";


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, TaskDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nuevaTarea = '';
  
  tareas: Task[] = [
    { id: 1, titulo: 'Revisar generadores de oxígeno', prioridad: 'alta', completada: false },
    { id: 2, titulo: 'Inventario de latas de conserva', prioridad: 'media', completada: true }
  ];

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      const tarea: Task = {
        id: Date.now(),
        titulo: this.nuevaTarea,
        prioridad: 'media', // Por defecto
        completada: false
      };
      this.tareas.push(tarea);
      this.nuevaTarea = ''; // Limpiar input
    }
  }

  borrarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

  cambiarEstado(tarea: Task) {
    tarea.completada = !tarea.completada;
  }
}
