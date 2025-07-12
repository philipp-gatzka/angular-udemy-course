import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {TaskModel} from './task.model';
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";
import {TasksService} from "../tasks.service";

@Component({
    selector: 'app-task',
    imports: [
        CardComponent,
        DatePipe
    ],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
})
export class TaskComponent {

    @Input({required: true}) public task!: TaskModel;

    private taskService: TasksService = inject(TasksService);

    public onCompleteTask(): void {
        this.taskService.removeTask(this.task.id);
    }
}
