import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../interfaces/Task.interface';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail {
  @Input() task !: Task;

  private taskService = inject(TaskService);

  onDelete(){
    // this.deleteClick.emit(this.task.id);
   this .taskService.deleteTask(this.task.id);
    // this.deleteClick.emit();
  }

  onComplete() {
    this.taskService.changeStatus(this.task.id);
  }
}
