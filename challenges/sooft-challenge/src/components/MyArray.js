import React from 'react';


const Asterisco = () => {
  return("*");
}


const MyArray = () => {

  var myArray = [1,2,1,3,3,1,2,1,5,1];
  var numbers = [1,2,3,4,5];
  var arr = [];
  

  return(
    <div>
      <div>
        <h1>Ejercicio 1</h1>
        <form>
          <input 
            value=""
            name="myarray"
          />
          <input type="submit" />
        </form>
      </div>
      <div>
        {numbers.map(elem => 
          <p>{elem}: {myArray.reduce((n, x) => n + (x === elem), 0)}</p>
          
        )
        }        
      </div>
    </div>
  )
}

export default MyArray;