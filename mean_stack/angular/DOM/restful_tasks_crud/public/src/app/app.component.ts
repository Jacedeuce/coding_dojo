import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'tasks';
    tasks : Array<object>
    one_task : object
    new_task : any
    constructor(private _tasksService: TasksService){}

    ngOnInit(){
        
        this.title = "Restful Tasks"
        this.new_task = { title: "", description: ""}
        this.one_task = { title: "", description: "", id: ""}
        this.return_tasks()
    }

    on_submit() {
        let observable = this._tasksService.add_task(this.new_task)
        observable.subscribe(data => {
            console.log(data)
            this.return_tasks()
        })

        this.new_task = { title: "", description: ""}
    }

    return_tasks(){
        this.get_tasks_from_service()
    }

    get_tasks_from_service(){
        let observable = this._tasksService.get_tasks()
        observable.subscribe(data => {
            // console.log("Tasks: ", data)
            this.tasks = data['tasks']
        })
    }

    display_task(id){
        let observable = this._tasksService.get_one_task(id)
        observable.subscribe(data => {
            this.one_task = data['task']
        })
    }

    on_update() {
        let observable = this._tasksService.update_task(this.one_task)
        observable.subscribe(data => {
            console.log(data)
            this.return_tasks()
        })
    }

    delete_a_task(task_to_delete) {
        let observable = this._tasksService.delete_task(task_to_delete)
        observable.subscribe(data => {
            console.log(data)
            this.return_tasks()
        })
    }
}