import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() cake_to_show: any;
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
