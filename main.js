var labels_checkbox = document.getElementById("labels");
var canvas = document.getElementById("main-canvas");
var canvasLeft = canvas.offsetLeft + canvas.clientLeft;
var canvasTop = canvas.offsetTop + canvas.clientTop;
var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;
var ctx = canvas.getContext("2d");

var pts = [];
var order = [];
var path_color = "#000";

canvas.oncontextmenu = function (e) {
  e.preventDefault();
  e.stopPropagation();
};
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

function drawPoints() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  // 1st point
  if (pts.length > 0) {
    ctx.fillStyle = "#999";
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(pts[0][0], pts[0][1], 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
  // other point(s)
  if (pts.length > 1) {
    ctx.fillStyle = "#333";
    for (let i = 1; i < pts.length; i++) {
      ctx.beginPath();
      ctx.arc(pts[i][0], pts[i][1], 4, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  // lables
  if (pts.length > 0 && labels_checkbox.checked) {
    ctx.fillStyle = "#333";
    for (let i = 0; i < pts.length; i++) {
      ctx.font = "18px serif";
      ctx.fillText(i, pts[i][0] + 5, pts[i][1] - 5);
    }
  }
  // solutions buttons
  if (pts.length < 2) {
    standard_solution.disabled = true;
    random_solution.disabled = true;
    exact_solution.disabled = true;
  } else {
    standard_solution.disabled = false;
    random_solution.disabled = false;
    exact_solution.disabled = false;
  }
  // exact solve button
  if (pts.length > 10) {
    exact_solution.disabled = true;
  } else {
    exact_solution.disabled = false;
  }
  // path
  if (order.length + 1 == pts.length) {
    ctx.strokeStyle = path_color;
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
}
