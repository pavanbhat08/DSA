function merge(arr1, arr2) {
  var arr = [];
  var i = 0;
  var j = 0;
  while (i != arr1.length && j != arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  for (; i < arr1.length; i++) {
    arr.push(arr1[i]);
  }
  for (; j < arr2.length; j++) {
    arr.push(arr2[j]);
  }
  return arr;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  var middle = Math.floor(array.length / 2);

  return merge(
    mergeSort(array.slice(0, middle)),
    mergeSort(array.slice(middle))
  );
}
var startTime = performance.now();
console.log(
  mergeSort(
    Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000))
  )
);
var endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
