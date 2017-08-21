import { Component, OnInit } from '@angular/core';

//Importing Http for sending/useing post/get
import { Http } from '@angular/http';
import * as $ from 'jquery';


@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {


palindrome:number;

  constructor(private http: Http) {  }

palindromeFunct() {

  let number  = this.palindrome;

  //Validation to check if input is not blank
     if(!number){
       alert('Please insert a String/Number');
       return;
     }

//Posting the number to php file
  this.http.post('http://localhost:80/test.php',JSON.stringify(number))
  .subscribe((data)=> {
         var value = data["_body"];
         //console.log(data["_body"]);
         console.log(value);
         if(value == 'true') {
            //var div = document.getElementById('div');
            //div.innerHTML=number+' is Palindrome';
            $("#div_P").html(number+' is Palindrome');
            $("#div_P").addClass('alert alert-success');
            $("#div_P").removeClass('alert alert-danger');
            //alert('It is Palindrome');
         }else {
           //var div = document.getElementById('div_N');
           //div.innerHTML=number+' is Not a Palindrome';
           $("#div_P").html(number+' is Not a Palindrome');
           $("#div_P").addClass('alert alert-danger');
           $("#div_P").removeClass('alert alert-success');
         }
  }), (error) => {
     console.log('Error');
  }
}

  ngOnInit() {

  }
}
