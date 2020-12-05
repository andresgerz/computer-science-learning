exports.mostrarAtributosVehiculos = (con) => {
  
  con.map(vehiculo => {
    
    if (vehiculo.hasOwnProperty("puertas")) {
      console.log("marca: " + vehiculo.marca + " // Modelo: " + vehiculo.modelo + " // Puertas: " + vehiculo.puertas + " // Precio: " + vehiculo.precio.toFixed(2));
        
    } else {
      console.log("marca: " + vehiculo.marca + " // Modelo: " + vehiculo.modelo + " // Cilindrada: " + vehiculo.cilindrada + " // Precio: " + vehiculo.precio.toFixed(2));
    }}
  );

}


exports.mostrarVehiculosEspecificos = (conces) => {

  let vehiculosPrecios = conces.map(vehiculo => vehiculo.precio);

  let masCaro = Math.max(...vehiculosPrecios);
  let masBarato = Math.min(...vehiculosPrecios);

  let vehiculoMasCaro = conces.find(vehiculo => vehiculo.precio === masCaro);
  let vehiculoMasBarato = conces.find(vehiculo => vehiculo.precio === masBarato);

  let modeloLetraY = conces.filter(vehiculo => vehiculo.modelo.match(/y|Y/));

  console.log("Vehiculo más caro: " + vehiculoMasCaro.marca + " " + vehiculoMasCaro.modelo);
  console.log("Vehiculo más barato: " + vehiculoMasBarato.marca + " " + vehiculoMasBarato.modelo);

  modeloLetraY.map(vehiculo => {
    console.log("Vehiculo que contiene en el modelo la letra 'Y': " + vehiculo.marca + " " + 
    vehiculo.modelo + " $" + vehiculo.precio.toFixed(2));
    })

}


exports.vehiculosOrdenadosPrecios = (conc) => {

  let vehiculosOrdenadosPrecio = conc.sort((a, b) => b.precio - a.precio);

  console.log("Vehículos ordenados por precio de mayor a menor: ");
  vehiculosOrdenadosPrecio.map(vehiculo => {
  console.log(vehiculo.marca + " " + vehiculo.modelo)});

};