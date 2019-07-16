import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'tasks';
    tasks : Array<object>
    one_task : object
    constructor(private _tasksService: TasksService){}

    ngOnInit(){
        
        this.title = "Restful Tasks"
    }

    return_tasks(){
        this.get_tasks_from_service()
    }

    get_tasks_from_service(){
        let observable = this._tasksService.get_tasks()
        observable.subscribe(data => {
            console.log("Tasks: ", data)
            this.tasks = data['tasks']
        })
    }

    do_this(id){
        let observable = this._tasksService.get_one_task(id)
        observable.subscribe(data => {
            this.one_task = data['task']
        })
    }

    select_change_handler(event: any){
        let observable = this._tasksService.get_one_task(event.target.value)
        observable.subscribe(data => {
            this.one_task = data['task']
        })
    }
}
