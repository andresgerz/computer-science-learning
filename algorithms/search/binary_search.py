# for i in list hace una busqueda binaria en python 3

lista = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 
59, 61, 67, 71, 73, 79, 83, 89, 97 ];


def binary_search(arr1, element):
     
    min1 = 0  
    max1 = len(arr1) - 1
    guess = (max1 - min1)//2

    while min1 <= max1:

        if arr1[guess] == element:
            return guess

        elif element > arr1[guess]:
            min1 = guess + 1

        else:
            max1 = guess - 1  

print(binary_search(lista, 61))