import { Component, OnInit } from '@angular/core';

@Component({
//  selector: '[app-servers]',
  selector: 'app-servers',
templateUrl: './servers.component.html',
styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreatorStatus = 'No server was created';
  serverName = '';

  serversId: number = 20;
  serversStatus: string = 'Offline';
  
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer(){
    this.serverCreatorStatus = 'The server was created';
  }

  //target é o elemento html onde o evento ocorre (em value). Value só está disponível por que o target é um elemento do tipo input
   onUpdateServerName(event: Event){
//    this.serverName = event.target.value;
//Isso é importante para informar typescript que nós sabemos que o tipo do  elemento html deste evento será um elemento html imput. Casting com ()
    this.serverName = (<HTMLInputElement>event.target).value;
  }

/*   onUpdateServerName(event: any){
    console.log(event);
  }
 */
  ngOnInit() {
  }

}
