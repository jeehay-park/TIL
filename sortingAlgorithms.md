📅 27/06/2023

# Bubble sort
A sorting algorithm in which pairs of neighboring values are compared and swapped into the right order if necessary in the innermost loop.

The term "bubble" in bubble sort comes from the way the algorithm works, where smaller (or larger) elements gradually "bubble" or rise to their correct positions in the list, similar to air bubbles rising to the surface of water.

During each iteration of the algorithm, as adjacent elements are compared and swapped if necessary, the larger (or smaller) elements gradually move towards the end (or beginning) of the list. This process resembles the way bubbles in a liquid move upward until they reach their final position at the surface.

The comparison and swapping process continues until the entire list is sorted, and the largest (or smallest) elements have "bubbled" to their correct positions.

While the term "bubble" may not seem immediately intuitive in relation to sorting, it was coined based on this gradual movement of elements during each pass of the algorithm.

It's important to note that the name "bubble sort" is not meant to represent any specific physical property of bubbles but rather serves as a metaphorical description of the behavior of the algorithm.

Bubble sort is an algorithm used to sort a list or array of elements, such as numbers or strings, in ascending or descending order. In its simplest form, bubble sort compares adjacent elements and swaps them if they are in the wrong order, thus "bubbling" the larger (or smaller) elements towards the end (or beginning) of the list.

Here's a step-by-step explanation of the bubble sort algorithm:

1. Start with an unsorted list of elements.
2. Compare the first element with the second element. If the first element is greater (or smaller) than the second element (depending on the desired sort order), swap them.
3. Move to the next pair of adjacent elements and compare them. Continue this process for all adjacent pairs in the list, making the necessary swaps.
4. Repeat steps 2 and 3 for each element in the list until the entire list is sorted.
5. The largest (or smallest) element will "bubble" to the end (or beginning) of the list after each iteration.
6. After completing all iterations, the list will be sorted in the desired order.

Bubble sort is considered relatively simple to understand and implement, but it is not the most efficient sorting algorithm for large datasets. Its time complexity is O(n^2) in the average and worst cases, where n represents the number of elements in the list. Other sorting algorithms, such as merge sort or quicksort, have better average and worst-case time complexities for larger datasets.

However, bubble sort can still be useful for small lists or as a learning tool to understand the basics of sorting algorithms.

```
function bubbleSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    // Last i elements are already in place
    for (let j = 0; j < length - i - 1; j++) {
      // Swap adjacent elements if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Example usage
const numbers = [5, 3, 8, 4, 2];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); // Output: [2, 3, 4, 5, 8]
```

# Merge Sort




# Quick Sort
Quick sort is a widely used divide-and-conquer sorting algorithm that follows a recursive approach to sort an array or list of elements. It is known for its efficiency and is one of the fastest sorting algorithms for average and best-case scenarios.

The quick sort algorithm works as follows:

1. Choose a pivot element from the array. The pivot can be selected in different ways, such as picking the first element, last element, or a random element.
2. Partition the array into two sub-arrays, one containing elements smaller than the pivot and the other containing elements larger than the pivot. The pivot is placed in its final sorted position.
3. Recursively apply steps 1 and 2 to the sub-arrays until the entire array is sorted. This is done by selecting a new pivot for each sub-array and partitioning it again.
4. Finally, the sub-arrays are combined, and the sorted array is obtained.

The key idea behind quick sort is the partitioning step, where the array is divided into two sub-arrays based on the pivot element. Elements smaller than the pivot are placed on the left side, and elements larger than the pivot are placed on the right side. This process ensures that the pivot element is in its correct sorted position.

The recursion continues until each sub-array contains only one element or is empty. In the end, the individual sub-arrays are combined, resulting in a fully sorted array.

The average time complexity of quick sort is O(n log n), where n represents the number of elements in the array. However, in the worst-case scenario, when the pivot selection is unbalanced, the time complexity can be O(n^2). To mitigate this, various techniques, such as randomized pivot selection or using the "median of three" approach, are employed to improve the algorithm's performance.

Quick sort is a highly efficient sorting algorithm and is widely used in practice due to its good average-case performance and low memory requirements.

```
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: array is already sorted or empty
  }

  const pivot = arr[Math.floor(arr.length / 2)]; // Choose pivot element
  const less = []; // Array to store elements less than the pivot
  const equal = []; // Array to store elements equal to the pivot
  const greater = []; // Array to store elements greater than the pivot

  for (const element of arr) {
    if (element < pivot) {
      less.push(element);
    } else if (element > pivot) {
      greater.push(element);
    } else {
      equal.push(element);
    }
  }

  // Recursively sort the sub-arrays and combine the results
  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

// Example usage
const numbers = [5, 3, 8, 4, 2];
const sortedNumbers = quickSort(numbers);
console.log(sortedNumbers); // Output: [2, 3, 4, 5, 8]
```

# Heap Sort







