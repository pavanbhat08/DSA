function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
}

function radixsort(arr) {
  var max = mostDigits(arr);
  for (var i = 0; i < max; i++) {
    var retArr = [];
    for (var k = 0; k < 10; k++) {
      retArr[k] = [];
    }
    for (var j = 0; j < arr.length; j++) {
      var digit = getDigit(arr[j], i);
      retArr[digit].push(arr[j]);
    }

    arr = [].concat(...retArr);
  }
  return arr;
}

var startTime = performance.now();
console.log(
  radixsort(
    Array.from({ length: 10000000 }, () => Math.floor(Math.random() * 1000))
  )
);
var endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
