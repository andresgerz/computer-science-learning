const { concesionaria } = require('./data.js');
const { vehiculosOrdenadosPrecios, 
  mostrarAtributosVehiculos,
  mostrarVehiculosEspecificos } = require('./excercises.js');

 
mostrarAtributosVehiculos(concesionaria);

console.log("=======================================================================");

mostrarVehiculosEspecificos(concesionaria);

console.log("=======================================================================");

vehiculosOrdenadosPrecios(concesionaria);