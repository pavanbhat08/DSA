function selctSort(arr) {
  for (i = 0; i < arr.length; i++) {
    var small = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[small]) small = j;
    }
    [arr[i], arr[small]] = [arr[small], arr[i]];
  }
  return arr;
}
var startTime = performance.now();
console.log(
  selctSort(
    Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000))
  )
);
var endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
