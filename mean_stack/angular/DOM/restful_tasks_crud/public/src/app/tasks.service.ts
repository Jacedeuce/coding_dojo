import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    constructor(private _http: HttpClient) {}

    get_tasks() {
        return this._http.get('/tasks')
    }

    get_one_task(id){
        return this._http.get('/tasks/' + id)
    }

    add_task(new_task) {
        console.log("creating new task")
        return this._http.post('/tasks', new_task)
    }

    update_task(updated_task) {
        console.log("updating task")
        return this._http.put(`/tasks/${updated_task.id}`, updated_task)
    }

    delete_task(delete_task) {
        console.log("deleting task")
        return this._http.delete(`/tasks/${delete_task}`)
    }
}