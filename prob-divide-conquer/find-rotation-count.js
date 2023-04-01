function findRotationCount() {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // If the array is already sorted, then it has not been rotated
      if (arr[left] <= arr[right]) {
        return left;
      }
      let mid = Math.floor((left + right) / 2);
      // If the middle element is greater than its next element,
      // then the array has been rotated at this point
      if (arr[mid] > arr[mid + 1]) {
        return mid + 1;
      }
      // If the left half is unsorted, then the rotation point must be in it
      if (arr[left] > arr[mid]) {
        right = mid - 1;
      }
      // If the right half is unsorted, then the rotation point must be in it
      else {
        left = mid + 1;
      }
    }
    // If the array is not rotated
    return 0;
}

module.exports = findRotationCount