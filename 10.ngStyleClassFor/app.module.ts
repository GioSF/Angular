import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Est1Component } from './est1/est1.component';
import { Est2Component } from './est2/est2.component';

@NgModule({
  declarations: [
    AppComponent,
    Est1Component,
    Est2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
