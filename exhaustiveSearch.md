# Exhaustive Search(Brute Force Search)

📅 29/04/2024

An exhaustive search, also known as brute force search, is a straightforward algorithmic technique that involves systematically checking all possible solutions to a problem until the correct one is found. It's often used when the problem size is small or when more efficient algorithms are impractical or unnecessary.

Here's a simple example of exhaustive search in JavaScript:

Let's say we want to find the maximum element in an array.

```javascript
function findMax(arr) {
    if (arr.length === 0) {
        return null; // If the array is empty, return null
    }

    let max = arr[0]; // Assume the first element is the maximum

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger element is found
        }
    }

    return max; // Return the maximum element
}

// Example usage:
const numbers = [10, 5, 8, 20, 3];
console.log("Maximum number:", findMax(numbers)); // Output: Maximum number: 20
```

In this example:

- The `findMax` function takes an array `arr` as input.
- It initializes a variable `max` with the first element of the array.
- Then, it iterates through the array starting from the second element (`i = 1`).
- For each element, it compares it with the current maximum (`max`) and updates `max` if the element is greater.
- After iterating through all elements, it returns the maximum element found.

This algorithm has a time complexity of O(n), where n is the number of elements in the array. It examines each element once, making it simple but not necessarily efficient for large datasets. However, for small datasets or when simplicity is prioritized, an exhaustive search like this can be quite suitable.