function insertSort(arr) {
  for (i = 1; i < arr.length; i++) {
    var curVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > curVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curVal;
  }
  return arr;
}

var startTime = performance.now();
console.log(
  insertSort(
    Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000))
  )
);
var endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
