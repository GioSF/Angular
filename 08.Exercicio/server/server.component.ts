import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  username: string = '';
  buttonStatus: boolean = true;

  constructor(){
  }

  inputText(event: Event){
    if(this.username == ''){
      this.buttonStatus = true;
    } else {
      this.buttonStatus = false;
    }
  }

  clearInput(){
    this.username = '';
  }

}
