let arr = new Array();

for (let i = 0; i < 10; i++) {
  arr.push(Math.random().toFixed(4) * 100);
}




function selectionSort(arr) {
  
  for (let j = 0; j < arr.length-1; j++) {
    let min = arr[j];
    let min_index = j;
    

    for (let k = j+1; k < arr.length; k++) {
      if (arr[k] < min) {
        min = arr[k];
        min_index = k;
      }  
    }
    let aux = 0;
    aux = arr[j];
    arr[j] = min;
    arr[min_index] = aux;
    console.log(arr);
  }
  return arr;
}


console.log(arr);