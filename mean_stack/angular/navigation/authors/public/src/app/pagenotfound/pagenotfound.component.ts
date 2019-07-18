import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    setTimeout(function(){this._router.navigate(['/view'])}, 10000) //https://stackoverflow.com/questions/42488068/auto-redirecting-after-n-seconds-using-angular-2
  }

}
