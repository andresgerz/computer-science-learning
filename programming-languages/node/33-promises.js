/* Promises



Hay 3 valores posibles:

fulfilled: el promise de cumplió satisfactoriamente.
rejected: el promise no se cumplió.
pending: estado inicial, no se ha cumplido y tampoco fue rechazado.

*/


const aplicarDescuento = new Promise( (resolve, reject) => {

 

  descuento ? 
  resolve('Descuento aplicado') : 
  reject('No pudo aplicarse el descuento');
  
})

aplicarDescuento
  .then(result => {
    console.log(`Result: ${result}`);
    function descuento() {

    }
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  })