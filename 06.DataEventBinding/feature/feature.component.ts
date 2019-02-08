import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  featureName: string = '';

  constructor() { }

  onUpdateFeatureName(event: Event){
    this.featureName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
