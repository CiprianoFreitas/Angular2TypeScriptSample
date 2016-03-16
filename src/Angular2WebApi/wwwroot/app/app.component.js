System.register(['angular2/core', './tasks.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tasks_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tasks_service_1_1) {
                tasks_service_1 = tasks_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_tasksService) {
                    var _this = this;
                    this._tasksService = _tasksService;
                    this.myTasks = [];
                    this.newTask = {
                        Description: '',
                        IsComplete: false
                    };
                    //vamos buscar todas as tarefas quando a aplicação é iniciada
                    _tasksService.getTasks()
                        .subscribe(function (tasks) { return _this.myTasks = tasks; }, function (error) { return console.error(error); });
                }
                AppComponent.prototype.createTask = function () {
                    var _this = this;
                    this._tasksService.createOrUpdateTask(this.newTask)
                        .subscribe(function (createdTask) {
                        console.log("success creating task");
                        _this.myTasks.push(createdTask);
                        _this.newTask.Description = '';
                    }, function () { return console.error("error creating task"); });
                };
                ;
                AppComponent.prototype.completeTask = function (task) {
                    task.IsComplete = true;
                    this._tasksService.createOrUpdateTask(task)
                        .subscribe(function () {
                        console.log("success updating task");
                    }, function () { return console.error("error updating task"); });
                };
                AppComponent.prototype.completeTasksExist = function () {
                    var completeTasks = this.getCompleteTasks();
                    return this.getCompleteTasks().length > 0;
                };
                AppComponent.prototype.getCompleteTasks = function () {
                    return this.myTasks.filter(function (task) { return task.IsComplete; });
                };
                AppComponent.prototype.getIncompleteTasks = function () {
                    return this.myTasks.filter(function (task) { return !task.IsComplete; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/app.template.html',
                        providers: [tasks_service_1.TasksService]
                    }), 
                    __metadata('design:paramtypes', [tasks_service_1.TasksService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map