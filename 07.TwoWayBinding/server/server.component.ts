import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverName: string = 'Test server name';
  serverStatus: string = 'Offline';

  constructor() {
    //Executado após compilação
  }

  inputServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onServerStatus(){
    this.serverStatus = "nome: " + this.serverName;
  }

  ngOnInit() {
  }

}
