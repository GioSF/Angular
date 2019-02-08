import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-est1',
  templateUrl: './est1.component.html',
  styleUrls: ['./est1.component.css']
})
export class Est1Component implements OnInit {

  userId = 1;
  userStatus = false;
  userSong = 2;

  
  constructor() {

    setInterval(() => {
      this.userId = Math.round(Math.random() * 10000);
      this.userStatus = Math.random() > 0.5 ? true : false;
      this.userSong = Math.round(Math.random() * 10000);
    },500);

   }

   getStatusColor(){
     return this.userStatus === true ? 'green' : 'red';
   }

  ngOnInit() {
  }

}
