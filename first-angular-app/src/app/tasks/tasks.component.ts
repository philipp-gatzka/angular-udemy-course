import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {TaskModel} from './task/task.model';
import {NewTaskComponent} from './new-task/new-task.component';
import {TasksService} from "./tasks.service";

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

    public constructor(private tasksService: TasksService) {

    }

    public get selectedUserTasks(): TaskModel[] {
        return this.tasksService.getUserTasks(this.userId);
    }

    public onStartAddTask(): void {
        this.isAddingTask = true;
    }

    public onCloseAddTask(): void {
        this.isAddingTask = false;
    }

    public onAddTask(): void {
        this.isAddingTask = false;
    }

}