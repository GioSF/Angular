import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { ControllerComponent } from './controller/controller.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenComponent,
    OddComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
