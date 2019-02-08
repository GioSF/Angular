import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exec1',
  templateUrl: './exec1.component.html',
  styles: [`
  .online{
    color: white;
  }
  `]
})
export class Exec1Component implements OnInit {

  userId: number = null;
  userStatus: boolean = false;
  trackNumber: number = null;

  constructor() {
    setInterval(() => {
      this.userId = Math.round(Math.random() * 10000);
      this.userStatus = Math.random() > 0.5 ? true : false;
      this.trackNumber =  Math.round(Math.random() * 1000);
    }, 500);

   }

   getColor(){
     return this.userStatus === true ? 'green' : 'red';
   }

  ngOnInit() {
  }

}
