function pivot(arr) {
  var pivot = arr[0];
  var pivotIndex = 0;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }
  [arr[0], arr[pivotIndex]] = [arr[pivotIndex], arr[0]];
  return pivotIndex;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  var key = pivot(arr);
  return quickSort(arr.slice(0, key))
    .concat(arr[key])
    .concat(quickSort(arr.slice(key + 1)));
}
var startTime = performance.now();
console.log(
  quickSort(
    Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000))
  )
);
var endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
