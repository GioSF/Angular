import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  variavelInterval;
  @Output() contadorEmitter = new EventEmitter<number>();
  contador = 0

  constructor() { }

  ngOnInit() {
  }

  comecarGame() {

    this.variavelInterval = setInterval(() => {
      this.contadorEmitter.emit(this.contador + 1);
      this.contador++
    }, 1000)

  }

  pausarGame() {
    clearInterval(this.variavelInterval)
  }

}
