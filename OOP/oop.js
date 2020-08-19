class Person {   // Clase E5

  constructor(age) {
    this.name = "Fernando";
    this.age = age;
    this.show_it = function() {
      console.log(`${this.name} has ${this.age} years old.`)
    }
  }


  set model(value) {
    console.log("Setter");
    this.model = value;
  }


  get model() {
    console.log("Getter");
    return this.model;
  }

}            
  

let person1 = new Person(42);
console.log(person1.name);
console.log(person1.age);
person1.show_it();


class Obra_social {
  constructor() {
    this.nro_afiliado = nro_afiliado;
  }


}

// Herencia

class Empleado extends Person {
  constructor() {
    super();
  }
}

let empleado1 = new Empleado()
console.log(empleado1)