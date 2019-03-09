import { Component, OnInit, NgModule, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})

@NgModule({
  exports: [
    EvenComponent
  ]
})

export class EvenComponent implements OnInit {

  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
