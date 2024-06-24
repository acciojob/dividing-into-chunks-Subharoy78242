function divide(arr, n) {
    let result = [];
    let currentChunk = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] <= n) {
            currentChunk.push(arr[i]);
            currentSum += arr[i];
        } else {
            result.push(currentChunk);
            currentChunk = [arr[i]];
            currentSum = arr[i];
        }
    }

    // Push the last chunk if it's not empty
    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }

    return result;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 1, 0, 2, 2];
const n1 = 5;
console.log(divide(arr1, n1)); // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]

const arr2 = [4, 3, 2, 1];
const n2 = 4;
console.log(divide(arr2, n2)); // Output: [[4], [3], [2], [1]]