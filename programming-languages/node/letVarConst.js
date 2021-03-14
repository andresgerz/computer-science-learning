/*
  var y let tiene su scope(alcance) diferente. 
  Con var se puede refefinir la variable en el mismo bloque, mientras que con let en un mismo bloque pero sí en bloque distintos.
  
  var x = 1;          
  var x = 42;                     

  let x = 'diez';
  if (...) {
    let x = 42;
  }

  Se recomienda el uso de let. 


  var a = 5;
  var b = 10;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global

  console.log(a);  // 4
  console.log(b);  // 1
} 

console.log(a); // 5
console.log(b); // 1

*/