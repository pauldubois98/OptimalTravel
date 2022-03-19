function swap(arr, i, j) {
  let len = arr.length;
  if (i >= len || j >= len) {
    console.warn("Swapping an array's elements past its length.");
  }
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
  return arr;
}
function* heapsAlg(arr, clone = true) {
  let size = arr.length;
  yield* heapsUtil(0);
  function* heapsUtil(index) {
    if (index === size) {
      return yield clone ? arr.slice() : arr;
    }
    for (let j = index; j < size; j++) {
      swap(arr, index, j);
      yield* heapsUtil(index + 1);
      swap(arr, index, j);
    }
  }
}
