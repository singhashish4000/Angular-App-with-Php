<?php

header("Access-Control-Allow-Origin: *");

 $isAvailable = true;

$postdata = file_get_contents("php://input");
$a = json_decode($postdata);



//$a = "121";

$b =  strrev($a);

//print $a;
//die();
//echo '<br>';

    $string_reverse = str_split($b);

    //print_r($string_reverse);

    $palin = '';

    foreach($string_reverse as $value){

        $palin =  $palin.$value;
    }


  //  print $palin;




    if($a == $palin){

        $isAvailable=true;

    } else {

       $isAvailable=false;

    }

     trim($isAvailable);
          echo json_encode($isAvailable);

?>
