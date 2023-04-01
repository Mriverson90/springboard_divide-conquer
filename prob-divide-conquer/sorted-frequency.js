function sortedFrequency(arr, num) {
    let firstIndex = findFirstIndex(arr, num);
    if (firstIndex === -1) {
      return 0;
    }
    let lastIndex = findLastIndex(arr, num);
    return lastIndex - firstIndex + 1;
}
function findFirstIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    let result = -1;
  
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        result = mid;
        right = mid - 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
  function findLastIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    let result = -1;
  
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        result = mid;
        left = mid + 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
module.exports = sortedFrequency