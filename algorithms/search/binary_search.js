let arr = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
	41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ];


function binary_search(arr1, element) {
  
  let min = 0;
  let max = arr1.length - 1;
  let count = 0;
  let guess;


  while(max >= min) {
   
    guess = Math.floor((min + max)/ 2);
    count++;

    if (arr1[guess] === element) {
      return guess; 

    } else if (arr1[guess] < element) {
      min = guess + 1;

    } else {
      max = guess - 1;
    }
  }

}

console.log(binary_search(arr, 61));