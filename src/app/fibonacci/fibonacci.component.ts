import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {

//defineing the number
number:number;

  constructor() { }

  ngOnInit() {
  }

//Main Function


//Note: This can alos be achieved by recursion instead of looping

  fibonaci() {

        var number = this.number;

        //Validation to check if input is not blank
           if(!number){
             alert('Please insert a Number');
             return;
           }

        //var div = document.getElementById('div-f');
        //div.innerHTML+='<br>Fibonacci Series of number '+n+':<br>';

        $("#div_F").html('Fibonacci Series of number '+number+':<br>');
        $("#div_F").addClass('alert alert-success');


     var firstNo=0,secondNo=1,add,i;

    for ( i = 1; i <= number; ++i)
    {
        //Adding the previous two numbers and swapping
        add = firstNo + secondNo;
        firstNo = secondNo;
        secondNo = add;

    //    Displaying the series in the div
        var div = document.getElementById('div_F');
        div.innerHTML+=firstNo.toString()+'<br>';

    }

  }

}
