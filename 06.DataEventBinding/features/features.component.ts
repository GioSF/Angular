import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  featuresName = '';
  updateTwo = '';
  allowWriteStatus: boolean = false;

  constructor() {

  }

  onAllowWrite() {
    if (this.allowWriteStatus == false) {
      this.allowWriteStatus = true;
    } else {
      this.allowWriteStatus = false;
    }
  }

  onUpdateTwo(event: Event) {
    this.updateTwo = (<HTMLInputElement>event.target).value;
  }

  onUpdateFeatures(event: Event) {
    this.featuresName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
