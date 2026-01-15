import { Injectable, Signal, signal, Component } from '@angular/core';
import { Task } from '../interfaces/Task.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private _tasks = signal<Task[]>([
    { id: 1, title: 'Revisar generadores de oxígeno', priority: 'alta', completed: false },
    { id: 2, title: 'Inventario de latas de conserva', priority: 'media', completed: true }
  ]);

  // private _tareaSubject = new BehaviorSubject<Task[]>([
  //   { id: 1, title: 'Revisar generadores de oxígeno', priority: 'alta', completed: false },
  //   { id: 2, title: 'Inventario de latas de conserva', priority: 'media', completed: true }
  // ])
  // private tasks: Task[] = [
  //   { id: 1, title: 'Revisar generadores de oxígeno', priority: 'alta', completed: false },
  //   { id: 2, title: 'Inventario de latas de conserva', priority: 'media', completed: true }
  // ];

  // tasks$ = this._tareaSubject.asObservable();
  tasks = this._tasks.asReadonly();

  getTasks(): Signal<Task[]> {
    // return this._tareaSubject.asObservable();
    return this._tasks.asReadonly();
  }
  // getTasks(){
  //   // return this.tasks;
  //   return [...this.tasks]
  // }

  addTask(title:string){
    const task: Task = {
        id: Date.now(),
        title,
        priority: 'media', // Por defecto
        completed: false
      };
      this._tasks.update(actualTasks => [...actualTasks, task]);
    // const actualTasks = this._tareaSubject.value;
    // // actualTasks.push(task);
    // this._tareaSubject.next([...actualTasks,task]);
    // // this.tasks.push(task)
  }

  deleteTask(id:number){
    // const actualTasks = this._tareaSubject.value;
    // const newTasks = actualTasks.filter(task => task.id !== id);
    // this._tareaSubject.next(newTasks);
    // this.tasks = this.tasks.filter(task => task.id !== id);
    this._tasks.update(actualTask => actualTask.filter(task => task.id !== id))
  }

  changeStatus(id:number){
    // const task = this.tasks.find(task => task.id === id);
    // if (task){
    //   task.completed = !task.completed;
    // }
    // const actualTasks = this._tareaSubject.value;
    // const task = actualTasks.find(task => task.id === id);
    // if (task) {
    //   task.completed = !task.completed;
    // }
    // this._tareaSubject.next(actualTasks);
    // const actualTasks = this._tasks();
    // const task = actualTasks.find(task => task.id === id);
    // if (task) {
    //   task.completed = !task?.completed;
    // }
    // this._tasks.set(actualTasks)

    this._tasks.update(actualTask => actualTask.map(task => task.id===id ? {...task, completed:!task.completed} : task ))
  }
}
