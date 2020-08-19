<?php 


  // Visibilidad: public, protected, private

  class Person {
    
    public $age = 42;        // atributos
    public $name = "Albert";
    protected $dni = 43210489;
    private $password = "asd0c2";

    public function show_it() {  // Metodo
      echo $this->name . " is " . $this->age . " years old.\n";
    }
  }


  $person1 = new Person();
  $person1->show_it();
  

  class Programmer extends Person {

    public $freelancer = True; 

  }
?>