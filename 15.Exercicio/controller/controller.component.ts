import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onGameStart(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }

  onGameStop(){
    clearInterval(this.interval)
  }
}
