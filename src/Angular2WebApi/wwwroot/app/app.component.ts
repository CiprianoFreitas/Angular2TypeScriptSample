import {Component}      from 'angular2/core';
import {TasksService}   from './tasks.service';

import {Task}           from './models/task';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.template.html',
    providers: [TasksService]
})
export class AppComponent {

    myTasks: Task[] = [];

    newTask: Task = {
        Description: '',
        IsComplete: false
    };

    constructor(private _tasksService: TasksService) {
        //vamos buscar todas as tarefas quando a aplicação é iniciada
        _tasksService.getTasks()
            .subscribe(
            tasks => this.myTasks = tasks,
            error => console.error(error));
    }

    createTask() {
        this._tasksService.createOrUpdateTask(this.newTask)
            .subscribe(
            (createdTask) => {
                console.log("success creating task");
                this.myTasks.push(createdTask);

                this.newTask.Description = '';
            },
            () => console.error("error creating task"));
    };

    completeTask(task: Task) {
        task.IsComplete = true;
        this._tasksService.createOrUpdateTask(task)
            .subscribe(
            () => {
                console.log("success updating task");
            },
            () => console.error("error updating task"));

    }

    completeTasksExist(): boolean {
        var completeTasks = this.getCompleteTasks();
        return this.getCompleteTasks().length > 0;
    }

    getCompleteTasks(): Task[] {
        return this.myTasks.filter((task) => task.IsComplete);
    }

    getIncompleteTasks(): Task[] {
        return this.myTasks.filter((task) => !task.IsComplete);
    }

}