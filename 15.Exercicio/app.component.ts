import { Component, EventEmitter, Output, NgModule } from '@angular/core';
import { EvenComponent } from '../app/even/even.component';
import { OddComponent } from '../app/odd/odd.component'
import { ControllerComponent } from '../app/controller/controller.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    EvenComponent,
    OddComponent,
    ControllerComponent
  ]
})

export class AppComponent {
  title = 'game';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number){
    if(firedNumber%2 == 0){
      this.evenNumbers.push(firedNumber)
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }

}
