import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exec2',
  templateUrl: './exec2.component.html',
  styleUrls: ['./exec2.component.css']
})
export class Exec2Component implements OnInit {
  
  allowNewServer = false;
serverCreationStatus = 'No server';
serverName = 'Testserver';
serverCreated = false;
servers = ['TestServer', 'Testserver2', 'Testserver3'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 500)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName; 
  }

}
