import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { importType } from '@angular/compiler/src/output/output_ast';
import {trigger, state, style, transition, animation, keyframes} from '@angular/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
