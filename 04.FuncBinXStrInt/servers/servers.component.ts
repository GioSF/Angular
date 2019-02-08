import { Component, OnInit } from '@angular/core';

@Component({
//  selector: '[app-servers]',
  selector: 'app-servers',
templateUrl: './servers.component.html',
styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  serversId: number = 20;
  serversStatus: string = 'Offline';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}