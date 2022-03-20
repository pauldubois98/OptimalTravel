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

function clear() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}
function drawPoints() {
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
  if (pts.length >= 10) {
    exact_solution.disabled = false;
    console.log("disable");
  } else {
    exact_solution.disabled = true;
    console.log("able");
  }
}
function drawPath(order, color = "#444") {
  ctx.strokeStyle = color;
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

canvas.addEventListener(
  "click",
  function (event) {
    x = event.pageX - canvasLeft;
    y = event.pageY - canvasTop;
    // console.log(x, y);
    pts.push([x, y]);
    drawPoints();
  },
  false
);
