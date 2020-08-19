#include<stdio.h>


int quick_sort(float arr[10]) 
{
  
  

  float left[] = {};
  int left_index = 0;
  int *pleft;
  pleft = left;

  float right[] = {}; 
  int right_index = 0;
  int *pright;
  pright = right;

  float pivot[] = arr[0];
  int *p;
  p = arr;
   
  for (int i = 0; i < 10; i++) {
    printf("%.2f, ", arr[i]);

    if (arr[i] < pivot) {
      left[left_index] = arr[i]; 
      left_index++;

    } else if (arr[i] > pivot) {
      right[right_index] = arr[i];
      right_index++;
    }
    
  }

  printf("\nleft: ");
  printf("%f\n", left);
  return quick_sort(left) + pivot + quick_sort(right);
}


int main() 
{
  
  float arr[10] = { 9, -1.4, 42, -55, 100, 256, 0.25, 512.1, 8 };
  
  quick_sort(arr);

  return 0;
}