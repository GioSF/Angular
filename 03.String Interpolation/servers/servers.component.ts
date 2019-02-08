import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
/*   templateUrl: './servers.component.html',
 */
templateUrl: './servers.component.html',
styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serversId: number = 20;
  serversStatus: string = 'Offline';

  constructor() { }

  ngOnInit() {
  }

}
