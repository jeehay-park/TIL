# Permutations of the elements in an array

📅 29/04/2024

What you're describing is generating all possible permutations of the elements in an array. You're correct that for an array of length n, there are n! (n factorial) possible permutations.

Here's a simple JavaScript code snippet to generate all permutations of an array:

```javascript
function permute(arr) {
    const result = [];

    function backtrack(temp, remaining) {
        if (remaining.length === 0) {
            result.push(temp.slice()); // Add a copy of temp to result
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const next = remaining[i];
            temp.push(next); // Add next to the temporary permutation
            remaining.splice(i, 1); // Remove next from the remaining elements
            backtrack(temp, remaining); // Recur with updated temporary and remaining arrays
            remaining.splice(i, 0, next); // Restore next to its original position in remaining
            temp.pop(); // Remove last element from temp for backtracking
        }
    }

    backtrack([], arr);
    return result;
}

// Example usage:
const array = [1, 2, 3];
console.log(permute(array)); // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

In this code:

- The `permute` function takes an array `arr` as input and returns an array containing all permutations of its elements.
- The `backtrack` function is a recursive helper function that generates permutations recursively using backtracking.
- At each recursive call, it tries adding each element from the remaining elements array to the temporary permutation, recursively generates permutations for the remaining elements, and then backtracks by removing the last element added to the temporary permutation.

This approach ensures that all possible permutations are generated. The time complexity of this algorithm is O(n!), where n is the number of elements in the array.


function permute(arr) {
    const result = [];

    function backtrack(temp, remaining) {
        if (remaining.length === 0) {
            result.push(temp.slice()); // Add a copy of temp to result
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const next = remaining[i];
            temp.push(next); // Add next to the temporary permutation
            const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1)); // Create a new array without next
            backtrack(temp, newRemaining); // Recur with updated temporary and remaining arrays
            temp.pop(); // Remove last element from temp for backtracking
        }
    }

    backtrack([], arr);
    return result;
}

// Example usage:
const array = [1, 2, 3];
console.log(permute(array)); // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]