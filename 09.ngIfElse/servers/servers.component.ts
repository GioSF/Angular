import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus: string = '';
  serverName: string = '';
  serverCreated: boolean = false;

  constructor() { }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
