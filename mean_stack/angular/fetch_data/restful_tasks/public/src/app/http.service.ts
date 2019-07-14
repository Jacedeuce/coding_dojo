import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { 
        this.getTasks()
        this.getATask('5d292b1435b36446c1a6d79c')
    }

    getTasks(){
        let tempObservable = this._http.get('/tasks')

        tempObservable.subscribe(data => console.log("Got our tasks!", data))
    }

    getATask(id){
        let taskObserver = this._http.get('/tasks/' + id)

        taskObserver.subscribe(data => console.log("Got task back: ", data))
    }
}
