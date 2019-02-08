import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-est2',
  templateUrl: './est2.component.html',
  styleUrls: ['./est2.component.css']
})
export class Est2Component implements OnInit {

  socketId = null;
  socketCreated = false;
  socketCreationStatus = "No socket";
  socketList = ['8', '5', '2', '4'];

  constructor() { }

  ngOnInit() {
  }

  onCreateSocket(){
    this.socketCreated = true;
    this.socketList.push(this.socketId);
    this.socketCreationStatus = "Socket was created.";
    this.socketId;
  }

  onDeleteSocket(){
    console.log(this.socketList.indexOf(this.socketId));    this.socketList.splice(this.socketList.indexOf(this.socketId),1);
  }

}
