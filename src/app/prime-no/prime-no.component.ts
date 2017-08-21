import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-prime-no',
  templateUrl: './prime-no.component.html',
  styleUrls: ['./prime-no.component.css']
})
export class PrimeNoComponent implements OnInit {
 number:number;

  constructor() {

   }

  ngOnInit() {
  }

//function to check Prime no

prime(){
   var number = this.number;

//Validation to check if input is not blank
   if(!number){
     alert('Please insert a Number');
     return;
   }

//Code/Logic

   if(number%2 == 0){
     $("#div_PN").html(number+' is a Prime Number');
     $("#div_PN").addClass('alert alert-success');
     $("#div_PN").removeClass('alert alert-danger');
   }else {
     $("#div_PN").html(number+' is Not a Prime Number');
     $("#div_PN").addClass('alert alert-danger');
     $("#div_PN").removeClass('alert alert-success');
   }
}


}
