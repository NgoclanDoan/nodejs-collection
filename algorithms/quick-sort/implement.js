const quickSort = arr => {
  // Step 4: Define a Base Case
  if(arr.length <= 1 ) return arr;

  // Step 1: Choose a Pivot Element
  let pivot = arr[0];

  // Step 2: Partition the Array
  let leftArr = [];
  let rightArr = [];

  for (const  [index, value] of arr.entries()) {
    if(arr[index] < pivot) {
      leftArr.push(arr[index]);
    } else {
      rightArr.push(arr[index]);
    }
  }

  // Step 3: Recursively Sort the Subarrays
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
