import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, title: 'Revisar generadores de oxígeno', priority: 'alta', completed: false },
    { id: 2, title: 'Inventario de latas de conserva', priority: 'media', completed: true }
  ];

  getTasks(){
    return [...this.tasks]
  }

  addTask(title:string){
    const task: Task = {
        id: Date.now(),
        title,
        priority: 'media', // Por defecto
        completed: false
      };
    this.tasks.push(task)
  }

  deleteTask(id:number){
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
