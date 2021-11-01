import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SubordsComponent } from './recertification/subords.component';
import { SubordAppControlComponent } from './recertification/subord-app-control.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, SubordsComponent, SubordAppControlComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
