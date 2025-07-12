import {NewTaskData, TaskModel} from "./task/task.model";
import {Injectable} from "@angular/core";


@Injectable({providedIn: 'root'})
export class TasksService {

    private tasks: TaskModel[] = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
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
            summary: 'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15'
        }
    ];

    constructor() {
        const tasks: string | null = localStorage.getItem('tasks');

        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    public getUserTasks(userId: string): TaskModel[] {
        return this.tasks.filter(task => task.userId == userId);
    }

    public addTask(task: NewTaskData, userId: string): void {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: task.title,
            summary: task.summary,
            dueDate: task.dueDate
        });
        this.saveTasks();
    }

    public removeTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id != id);
        this.saveTasks();
    }

    private saveTasks(): void {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}