import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../interfaces/Task.interface';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail {
  @Input() task !: Task;
  @Output() deleteClick = new EventEmitter<number>();

  onDelete(){
    this.deleteClick.emit(this.task.id);
  }
}
