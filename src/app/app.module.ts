import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PrimeNoComponent } from './prime-no/prime-no.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeNoComponent,
    PalindromeComponent,
    FibonacciComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
