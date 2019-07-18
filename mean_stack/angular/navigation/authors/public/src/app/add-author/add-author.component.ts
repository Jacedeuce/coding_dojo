import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NgModel } from '@angular/forms';
import { AuthorsService} from '../authors.service'

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  new_author : object
  constructor(
    private _router: Router,
    private _authorsService : AuthorsService
    ) { }

  ngOnInit() {
    this.new_author = {name : ""}
  }
  
  make_author(){
    let observable = this._authorsService.create_author(this.new_author)
    observable.subscribe(data => {
      this._router.navigate(['/view'])
    })
      
  }

}
