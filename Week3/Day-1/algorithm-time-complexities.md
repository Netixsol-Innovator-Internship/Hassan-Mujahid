Report on Algorithm Time Complexities

## 1. Constant Time Complexity (O(1))

An algorithm is said to have constant time complexity if it executes in the same amount of time, regardless of the input size.

### Example: Accessing an Element in an Array

```javascript
function getFirstElement(arr) {
  return arr[0];
}
```

- **Explanation**: Accessing an element in an array is done in constant time.
- **Time Complexity**: O(1)

---

## 2. Linear Time Complexity (O(n))

An algorithm has linear time complexity when its performance directly scales with the size of the input.

### Example: Finding the Sum of Elements in an Array

```javascript
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

- **Explanation**: The algorithm iterates through each element of the array exactly once.
- **Time Complexity**: O(n)

---

## 3. Logarithmic Time Complexity (O(log n))

Logarithmic algorithms reduce the problem size in each step, often by dividing the input.

### Example: Binary Search

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

- **Explanation**: Each iteration reduces the search space by half.
- **Time Complexity**: O(log n)

---

## 4. Quadratic Time Complexity (O(n²))

Algorithms with quadratic complexity often involve nested loops over the input.

### Example: Bubble Sort

```javascript
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

- **Explanation**: Each pass involves a nested loop comparing and swapping elements.
- **Time Complexity**: O(n²)

---

## 5. Cubic Time Complexity (O(n³))

Algorithms with cubic complexity involve three nested loops over the input.

### Example: Matrix Multiplication

```javascript
function multiplyMatrices(a, b) {
  let rowsA = a.length,
    colsA = a[0].length;
  let rowsB = b.length,
    colsB = b[0].length;
  if (colsA !== rowsB) throw new Error("Invalid matrices dimensions");

  let result = Array(rowsA)
    .fill(0)
    .map(() => Array(colsB).fill(0));

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return result;
}
```

- **Explanation**: The algorithm requires three nested loops to compute matrix products.
- **Time Complexity**: O(n³)

---

## 6. Exponential Time Complexity (O(2ⁿ))

Exponential algorithms grow at a rate of 2 raised to the power of the input size.

### Example: Solving the Traveling Salesman Problem (Brute Force)

```javascript
function tsp(graph, visited, currPos, n, count, cost) {
  if (count === n && graph[currPos][0]) {
    return cost + graph[currPos][0];
  }

  let minCost = Infinity;
  for (let i = 0; i < n; i++) {
    if (!visited[i] && graph[currPos][i]) {
      visited[i] = true;
      minCost = Math.min(
        minCost,
        tsp(graph, visited, i, n, count + 1, cost + graph[currPos][i])
      );
      visited[i] = false;
    }
  }
  return minCost;
}
```

- **Explanation**: This algorithm explores all possible paths.
- **Time Complexity**: O(2ⁿ)

---

### Summary Table

| Time Complexity | Example Algorithm     | Characteristics                           |
| --------------- | --------------------- | ----------------------------------------- |
| O(1)            | Array Access          | Constant time, irrespective of input size |
| O(n)            | Array Sum             | Grows linearly with input size            |
| O(log n)        | Binary Search         | Reduces problem size by half each step    |
| O(n²)           | Bubble Sort           | Nested loops over input                   |
| O(n³)           | Matrix Multiplication | Triple nested loops                       |
| O(2ⁿ)           | TSP (Brute Force)     | Explores all possibilities                |

---
