function bubbleSort(arr) {
  var swap;
  for (i = arr.length; i > 0; i--) {
    swap = true;
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = false;
      }
    }
    if (swap) break;
  }
  return arr;
}

var startTime = performance.now();
console.log(
  bubbleSort(
    Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000))
  )
);
var endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
