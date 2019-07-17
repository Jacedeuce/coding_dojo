import { Component, OnInit } from '@angular/core';
import { CakesService } from './cakes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cakes';
  cakes : Array<object>
  one_cake : object
  new_cake : any
  new_rating : any

  constructor(private _cakesService: CakesService){}

  ngOnInit(){
    this.new_cake = {full_name : "", name : "", image_url : ""}
    this.get_cakes()
  }

  bake() {
    let observable = this._cakesService.bake_cake(this.new_cake)
    observable.subscribe(data => {
      console.log("Cake Baked")
      console.log(data)
    })
  }

  get_cakes() {
    let observable = this._cakesService.get_cakes()
    observable.subscribe(data => {
      // console.log(data['cakes'])
      this.cakes = data['cakes']
    })
  }

  get_rating_from_child(formData, cake_id) {
    let observable = this._cakesService.make_rating(formData, cake_id)
    observable.subscribe(data => {
      console.log("rating stored")
      console.log(data)
    })
  }
}
