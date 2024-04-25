function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    
    // Use counters for the number of comparisons and swaps
    let comparisons = 0;
    let swaps = 0;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
      
      comparisons++;
      swaps++;
    }

    arr[j + 1] = current;
    
    // Output counters
    console.log(`Pass ${i}: Comparisons: ${comparisons}, Swaps: ${swaps}`);
  }
  
  return arr;
}

// Test the insertion sort function
const arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
const sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
