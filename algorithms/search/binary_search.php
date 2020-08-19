<?php
  print "\n";

  $arr = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ];
  $element = 47;

  function binary_search($arr, $element) {
    
    $min = 0;
    $max = count($arr) - 1;
    $guess = floor(($max + $min)/2);
    $counter = 0;

    while($min <= $max) {
  
      $counter++;
      
      if($arr[$guess] === $element) {
        return $guess;

      } elseif($guess < $element) {
        $min = $guess + 1;

      } else {
        $max = $guess - 1;
      }
     

    }
  }
  
  echo binary_search($arr);
  
  print "\n";
?>