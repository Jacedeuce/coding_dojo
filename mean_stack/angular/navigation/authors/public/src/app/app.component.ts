import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'Authors';
  // authors : Array<object>
  // one_author : object
  // new_author : object
  // update_author : object
  
  constructor(){}

  ngOnInit(){
    // this._router.navigate(['view']);
    // this.new_author = {name : ""}
    // this.get_authors()
  }

  // get_authors() {
  //   let observable = this._authorsService.get_authors()
  //   observable.subscribe(data => {
  //     this.authors = data['authors']
  //   })
  // }

//   get_one_author(id) {
//     let observable = this._authorsService.get_one_author(id)
//     observable.subscribe(data => {
//       this.one_author = data['author']
//     })
//   }

//   create_author_from_child() {
//     let observable = this._authorsService.create_author(this.new_author)
//     observable.subscribe(data => {
//       console.log("author created")
//       this.new_author = {name : ""}
//       this.get_authors()
//     })
//   }
}
