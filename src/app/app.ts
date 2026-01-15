import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './interfaces/Task.interface';
import { TaskDetail } from "./task/task-detail";
import { TaskService } from './services/task-service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, TaskDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks$ : Observable<Task[]>;
  // Forma tradicional de inyectar dependencias
  constructor(private taskService: TaskService){
      this.tasks$ = this.taskService.getTasks();
      //this.tasks$ = this.taskService.tasks$;
    }
    
    nuevaTarea = '';
    // private taskService: TaskService = inject(TaskService);
    // tasks: Task[] = this.taskService.getTasks();
    // taskLists$ = this.taskService.tasks$;
    // taskLists$ = this.taskService.getTasks();


  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.taskService.addTask(this.nuevaTarea.trim());
      this.nuevaTarea = ''; // Limpiar input
      // this.tasks = this.taskService.getTasks();
    }

  }

  updateList(){
      // this.tasks = this.taskService.getTasks();

  }
    
} 
