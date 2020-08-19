""" Responsabilidad: Mucha cohesión y bajo acoplamiento. 

    cohesion != acoplamiento

    cohesion = 1 / acoplamiento

    alto acoplamientos: dos archivos dependen mucho entre sí. 
    

"""


class Person:

    def __init__(self, name, age, profession, job):
        self.name = name             # atributos               
        self.age = age
        self.profession = profession
        self.job = job

    """ def __init__(self):
        self.name = input("Name: ")
        self.age = int(input("Age: "))
        self.profession = input("Profession:")
        self.job = bool(input("Job: "))

    """


    def show_it(self):     # Metodo
        print(self.name)
        print(self.age)
        print(self.profession)
        print(self.job)

        


class Afiliado:

    def __init__(self,nro_afiliado):
        self.nro_afiliado = nro_afiliado


""" Herencia multiple """
class Empleado(Person,Afiliado):
    def __init__(self,name,age,profession,job,nro_afiliado,dni):      
        Person.__init__(self,dni) 

person1 = Person("Tom", 28, "Policeman", True)
person2 = Person("Albert", 42, "Scientist", False)
person1.show_it()
#print(isinstance(("Tom", 28, "Policeman", True),person1))
print(issubclass(Afiliado,Person))




# property()  "Es opcional"


class Contador(Empleado):   # Herencia multinivel
    pass


print(Contador.__mro__)       # Orden de resolución de métodos
print(Contador.mro())


""" Polimorfismo:

"""