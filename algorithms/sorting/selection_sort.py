import random
import numpy as np

""" arr = []
for i in range(1000):
    arr.append(float('{:5.2f}'.format(random.random() * 100)))

"""

arr = np.arange(1000)

def selection_sort(arr):

    for j in range(len(arr)-1):
        min = arr[j]

        for k in range(j+1, len(arr)):
            if arr[k] < min:
              min = arr[k]
              min_index = k
              arr[j], arr[min_index] = min, arr[j]  
    
    return arr

print(selection_sort(arr))