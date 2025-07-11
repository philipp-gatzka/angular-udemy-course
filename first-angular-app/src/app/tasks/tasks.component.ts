import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {NewTaskData, TaskModel} from './task/task.model';
import {NewTaskComponent} from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [
    TaskComponent,
    NewTaskComponent
  ]
})
export class TasksComponent {

  @Input({required: true}) public userId!: string;

  @Input({required: true}) public name!: string;

  public isAddingTask: boolean = false;

  public tasks: TaskModel[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15'
    }];

  public get selectedUserTasks(): TaskModel[] {
    return this.tasks.filter(task => task.userId == this.userId);
  }

  public onCompleteTask(taskId: string): void {
    this.tasks = this.tasks.filter(task => task.id != taskId);
  }

  public onStartAddTask(): void {
    this.isAddingTask = true;
  }

  public onCancelAddTask(): void {
    this.isAddingTask = false;
  }

  public onAddTask(task: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate
    });
    this.isAddingTask = false;
  }
}