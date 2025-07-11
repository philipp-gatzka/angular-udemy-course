import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskModel} from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) public task!: TaskModel;

  @Output() public complete: EventEmitter<string> = new EventEmitter<string>();

  public onCompleteTask(): void {
    this.complete.emit(this.task.id);
  }
}
