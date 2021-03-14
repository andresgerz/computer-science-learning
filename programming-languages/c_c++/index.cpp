#include<iostream>

using namespace std;

class Person {
  private: 
  char password;

  public:
  void constructor();


};


void Person::constructor() 
{
  cout << "\nName: " << endl;
  cin.getline((name.40));

}




int main() {
  int nro1, nro2, word;
/* 
  cout << "\n Ingrese un nro: ";
  cin >> nro1;
   
  cout << nro1;
  cout <<  "\n\n";
 */

  for(nro2 = 0; nro2<8; nro2++) {
    cout << nro2 << endl;

  }
  
  cout << "\n\n";

  /* hacer números primos */

  while(true) {
    nro1++;

    cout << nro1;
    cout << "\n";
    
    if(nro1 == 12) {
      break;
    }


  }



  return 0;
}