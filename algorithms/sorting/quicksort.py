# Quick sort

# the built-in function sort() in Python 3 look like the sorting 
# algorithm quick sort

arr = [-5, -100, 1.2, 0, 42 , 1, 55, -11, 88.8, 112]


def quicksort(arr):
  
  if len(arr) < 1:
    return []

  pivot = arr[0]
  lower, higher = [], []

  for i in arr:
    
    if i < pivot:
      lower.append(i) 

    elif i > pivot:
      higher.append(i)

  return quicksort(lower) + [pivot] + quicksort(higher)

print(quicksort(arr))