var canvas = document.getElementById("main-canvas");
var canvasLeft = canvas.offsetLeft + canvas.clientLeft;
var canvasTop = canvas.offsetTop + canvas.clientTop;
var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;
var ctx = canvas.getContext("2d");

var pts = [];

canvas.oncontextmenu = function (e) {
  e.preventDefault();
  e.stopPropagation();
};

function drawPoints() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  if (pts.length > 0) {
    ctx.fillStyle = "#AAA";
    ctx.strokeStyle = "#444";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(pts[0][0], pts[0][1], 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
  if (pts.length > 1) {
    ctx.fillStyle = "#666";
    for (let i = 1; i < pts.length; i++) {
      ctx.beginPath();
      ctx.arc(pts[i][0], pts[i][1], 3, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}

canvas.addEventListener(
  "click",
  function (event) {
    x = event.pageX - canvasLeft;
    y = event.pageY - canvasTop;
    // console.log(x, y);
    pts.push([x, y]);
    drawPoints();
    if (pts.length > 2 && pts.length < 8) {
      std_order = Array.from(Array(pts.length - 1).keys()).map((i) => i + 1);
      order = shortest();
      drawPath(order);
    }
  },
  false
);

function drawPath(order) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let k = 0; k < order.length; k++) {
    i = order[k];
    ctx.lineTo(pts[i][0], pts[i][1]);
  }
  i = 0;
  ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.stroke();
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
