import { Component, OnInit, NgModule, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})

@NgModule({
  exports: [
    OddComponent
  ]
})

export class OddComponent implements OnInit {

  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
