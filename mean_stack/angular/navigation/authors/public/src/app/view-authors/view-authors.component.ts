import { Component, OnInit, Input } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-view-authors',
  templateUrl: './view-authors.component.html',
  styleUrls: ['./view-authors.component.css']
})
export class ViewAuthorsComponent implements OnInit {
  authors: Array<object>


  constructor(private _authorsService: AuthorsService) { }

  ngOnInit() {
    this.get_authors()
  }

  get_authors() {
    let observable = this._authorsService.get_authors()
    observable.subscribe(data => {
      this.authors = data['authors'].sort(function(a, b){
        var textA = a.name.toUpperCase()
        var textB = b.name.toUpperCase()
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      })
    })
  }

  delete_author(id) {
    let observable = this._authorsService.delete_author(id)
    observable.subscribe()
    this.get_authors()
  }

}
