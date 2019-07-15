import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    tasks : Array<object>
    title : string
    constructor(private _tasksService: TasksService) {}

    ngOnInit(){
        this.get_tasks_from_service()
        this.title = 'Restful Tasks';
    }

    get_tasks_from_service(){
        let observable = this._tasksService.get_tasks()
        observable.subscribe(data => {
            console.log("Tasks: ", data)
            this.tasks = data['tasks']
        })
    }
}
