function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        return mid;
      }
  
      // If the left half is sorted and the target is within its range
      if (arr[left] <= arr[mid] && num >= arr[left] && num < arr[mid]) {
        right = mid - 1;
      } 
      // If the right half is sorted and the target is within its range
      else if (arr[mid] <= arr[right] && num > arr[mid] && num <= arr[right]) {
        left = mid + 1;
      }
      // If the left half is not sorted, then the right half must be sorted
      else if (arr[left] > arr[mid]) {
        right = mid - 1;
      }
      // If the right half is not sorted, then the left half must be sorted
      else {
        left = mid + 1;
      }
    }
  
    // If the target is not found
    return -1;
}

module.exports = findRotatedIndex