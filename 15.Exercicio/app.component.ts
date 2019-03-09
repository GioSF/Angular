import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game2';

  @Output() listaPar: number[] = [];
  @Output() listaImpar: number[] = [];

  acaoNumero(contador: number) {

    if (contador % 2 == 0) {
      this.listaPar.push(contador)
      console.log(contador)
      console.log(this.listaPar.toString())
    } else {
      this.listaImpar.push(contador)
      console.log(contador)
      console.log(this.listaImpar.toString())
    }
  }


}
