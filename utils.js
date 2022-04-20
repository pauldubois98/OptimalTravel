function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

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

function distance(order) {
  d = 0;
  i = 0;
  j = order[0];
  dx = pts[i][0] - pts[j][0];
  dy = pts[i][1] - pts[j][1];
  d += Math.sqrt(dx * dx + dy * dy);
  for (let k = 0; k < order.length - 1; k++) {
    i = order[k];
    j = order[k + 1];
    dx = pts[i][0] - pts[j][0];
    dy = pts[i][1] - pts[j][1];
    d += Math.sqrt(dx * dx + dy * dy);
  }
  i = order[order.length - 1];
  j = 0;
  dx = pts[i][0] - pts[j][0];
  dy = pts[i][1] - pts[j][1];
  d += Math.sqrt(dx * dx + dy * dy);
  return d;
}
function sq_distance(order) {
  d = 0;
  i = 0;
  j = order[0];
  dx = pts[i][0] - pts[j][0];
  dy = pts[i][1] - pts[j][1];
  d += dx * dx + dy * dy;
  for (let k = 0; k < order.length - 1; k++) {
    i = order[k];
    j = order[k + 1];
    dx = pts[i][0] - pts[j][0];
    dy = pts[i][1] - pts[j][1];
    d += dx * dx + dy * dy;
  }
  i = order[order.length - 1];
  j = 0;
  dx = pts[i][0] - pts[j][0];
  dy = pts[i][1] - pts[j][1];
  d += dx * dx + dy * dy;
  return d;
}
function shortest() {
  std_order = Array.from(Array(pts.length - 1).keys()).map((i) => i + 1);
  it = heapsAlg(std_order);
  dmin = Infinity;
  omin = std_order;
  let order = it.next();
  while (!order.done) {
    d = sq_distance(order.value);
    if (d < dmin) {
      dmin = d;
      omin = order.value;
    }
    order = it.next();
  }
  return omin;
}
