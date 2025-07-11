import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTaskData} from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  public title: string = '';

  public summary: string = '';

  public dueDate: string = '';

  @Output() public cancel: EventEmitter<void> = new EventEmitter<void>();

  @Output() public add: EventEmitter<NewTaskData> = new EventEmitter<NewTaskData>();

  public onSubmit(): void {
    this.add.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    });
  }

  public onCancel(): void {
    this.cancel.emit();
  }

}
