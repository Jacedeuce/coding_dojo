import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http: HttpClient) {}

  get_tasks(){
    return this._http.get('/tasks')
  }
  get_one_task(id){
    return this._http.get('/tasks/' + id)
  }
}
