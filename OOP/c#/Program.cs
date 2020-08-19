using System;

namespace oop
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.WriteLine("Hello World!");

            Circle myCircle;  // Creación de objeto de tipo circle. Variable/objeto

            myCircle = new Circle();  // Iniciación de variable/objeto. Instanciación.
            
            Console.WriteLine(myCircle.areaCalculate(5));

            Circle myCircle2 = new Circle();

            Console.WriteLine(myCircle2.areaCalculate(42));

            ConversorPesoDolar obj = new ConversorPesoDolar();
            Console.Write(obj.convertir(101));


        }
    }

    class Circle
    {
        private const double pi = 3.1416;  // Propiedad de la clase Circle
        
        public double areaCalculate(int radio) // Método de la Clase Circle
        {
            return pi * radio * radio;

        }
    }

    class ConversorPesoDolar
    {
        public double dolar = 83;

        public double convertir(double cantidad)
        {
            return cantidad * dolar;
        } 
    }

}
