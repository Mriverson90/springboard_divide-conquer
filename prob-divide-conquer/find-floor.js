function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === x) {
        // If the middle element is equal to x, then it is the floor of x
        return arr[mid];
      } else if (arr[mid] < x) {
        // If the middle element is less than x, then it could be the floor
        floor = arr[mid];
        left = mid + 1;
      } else {
        // If the middle element is greater than x, then the floor must be in the left half
        right = mid - 1;
      }
    }
    // If the floor was found, return it
    if (floor !== -1) {
      return floor;
    }
    // If the floor was not found, return -1
    return floor;
}

module.exports = findFloor