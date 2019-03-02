import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() { 
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges){  
    console.log('OnChanges called');
    console.log(changes);
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterViewChecked(){
    console.log('AfterViewChecked called');
    console.log("textContent: " + this.header.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }

  ngAfterContentChecked(){
    console.log('AfterContentChecked called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log("textContent: " + this.header.nativeElement.textContent);
  }
  ngOnDestroy(){

  }

}
