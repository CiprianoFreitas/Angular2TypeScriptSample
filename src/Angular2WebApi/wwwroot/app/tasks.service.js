System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var TasksService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            TasksService = (function () {
                function TasksService(http) {
                    this.http = http;
                    this.apiUrl = 'api/tasks';
                }
                TasksService.prototype.getTasks = function () {
                    return this.http.get(this.apiUrl)
                        .map(function (res) {
                        return res.json();
                    });
                };
                TasksService.prototype.createOrUpdateTask = function (newTask) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var task = JSON.stringify(newTask);
                    return this.http.post(this.apiUrl, task, options)
                        .map(function (res) { return res.json(); });
                };
                TasksService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TasksService);
                return TasksService;
            })();
            exports_1("TasksService", TasksService);
        }
    }
});
//# sourceMappingURL=tasks.service.js.map