import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {Task}           from './models/task';


@Injectable()
export class TasksService {
    apiUrl: string = 'api/tasks';

    constructor(private http: Http) { }

    getTasks(): Observable<Task[]> {
        return this.http.get(this.apiUrl)
            .map(res => {
                return <Task[]>res.json()
            });
    }

    createOrUpdateTask(newTask: Task): Observable<Task> {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var task = JSON.stringify(newTask);

        return this.http.post(this.apiUrl, task, options)
            .map(res => <Task>res.json());
    }
}