import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  displayDetail = false;
  log = [];
    
  constructor() { }

  ngOnInit() {
  }

  ddAction(){

    this.displayDetail = !this.displayDetail;
    this.log.push(new Date());

  }

}
