import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { AuthorsService } from '../authors.service'

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  author_to_update : any
  constructor(
    private _authorsService: AuthorsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      console.log(params['id'])
      this.author_to_update = ""
      this.get_author(params['id'])
    })
  }

  get_author(id) {
    let observable = this._authorsService.get_one_author(id)
    observable.subscribe(data => {
      this.author_to_update = data['author']
    })
  }

  update_author() {
    let observable = this._authorsService.update_author(this.author_to_update)
    observable.subscribe(data => {
      this._router.navigate(['/view'])
    })
  }

}
