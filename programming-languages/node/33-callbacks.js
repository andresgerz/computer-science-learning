/* Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción. A menudo se utilizan para continuar con la ejecución del código después de que se haya completado una operación a sincrónica  — estas se denominan devoluciones de llamada asincrónicas (no sabemos exactamente cuándo se devolverán los datos).


¿ JS es asincrono o sincrono?
- Es sincrono, pero se lo puede hacer asincrono con con callbacks, async await y promises.

*/

const usersOnline = ['Andy', 'Gustav', 'Ekaterina', 'Lukas'];


const addUserOnline = (user, callback) => {

  setTimeout(() => {
    usersOnline.push(user);
    callback();
  }, 3000);
}

function showUsersOnline() {

  setTimeout(() => {
    usersOnline.forEach(item => {
      console.log(item);
    });
    console.log('###############');
  }, 2000)
}

showUsersOnline();
addUserOnline('Isabel', showUsersOnline);


