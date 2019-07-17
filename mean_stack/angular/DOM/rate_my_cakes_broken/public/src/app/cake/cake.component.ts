import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() cakes_to_show: any;
  @Output() rating_emitter = new EventEmitter();
  new_rating: any
  constructor() { }

  ngOnInit() {
    this.new_rating = { stars : "", comment : "Type your comment here..."}
  }

  send_rating_to_parent() {
    this.rating_emitter.emit(this.new_rating)
  }

}


