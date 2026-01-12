import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './interfaces/Task.interface';
import { TaskDetail } from "./task/task-detail";
import { TaskService } from './services/task-service';


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, TaskDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Forma tradicional de inyectar dependencias
  // constructor(private taskService: TaskService){
    //   this.tasks = this.taskService.getTasks();
    // }
    
    nuevaTarea = '';
    private taskService: TaskService = inject(TaskService);
    tasks: Task[] = this.taskService.getTasks();


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
