import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTaskData} from '../task/task.model';
import {TasksService} from "../tasks.service";

@Component({
    selector: 'app-new-task',
    imports: [
        FormsModule
    ],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

    @Input({required: true}) userId!: string;

    public title: string = '';

    public summary: string = '';

    public dueDate: string = '';

    private tasksService: TasksService = inject(TasksService);

    @Output() public cancel: EventEmitter<void> = new EventEmitter<void>();

    @Output() public close: EventEmitter<void> = new EventEmitter<void>();

    public onSubmit(): void {
        this.tasksService.addTask(
            {
                title: this.title,
                summary: this.summary,
                dueDate: this.dueDate
            },
            this.userId
        );
        this.close.emit();
    }

    public onCancel(): void {
        this.cancel.emit();
    }

}
