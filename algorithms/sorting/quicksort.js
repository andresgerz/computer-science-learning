let arr = [-5, -100, 1.2, 0, 42 , 1, 55, -11, 88.8, 112];

function quicksort(arr) {
  
  if (arr.length < 1) {
    return [];
  }

  let left = [];
  let right = [];
  let pivot = arr[0];

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] < pivot) {
      left.push(arr[i]);

    } else if (arr[i] > pivot) {
      right.push(arr[i]); 
    }
  }

  return  [].concat(quicksort(left), pivot, quicksort(right));
}

console.log(quicksort(arr));