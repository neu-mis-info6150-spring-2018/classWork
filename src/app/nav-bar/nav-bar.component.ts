import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() newStickyEmitted = new EventEmitter();
  counter = 0;
  constructor() { }

  ngOnInit() {
  }
  clickmethod() {
    this.counter = this.counter + 1;
    this.newStickyEmitted.emit(this.counter);
   
  }
}
