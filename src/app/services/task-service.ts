import { Injectable, Signal, signal, Component, inject } from '@angular/core';
import { Task } from '../interfaces/Task.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private URLBase: string = 'http://localhost:3000/tasks'
  private httpClient : HttpClient = inject(HttpClient);

  // constructor(private httpClient: HttpClient){}

  getTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.URLBase);
  }

  
  addTask(title: string){
    const newTask: Omit<Task,'id'> = {
      title,
      priority: 'media',
      completed: false
    }
    return this.httpClient.post<Task>(this.URLBase, newTask);
  }
}
