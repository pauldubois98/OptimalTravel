function random_points(nb) {
  for (var i = 0; i < nb; i++) {
    x = 5 + Math.round(Math.random() * (canvasWidth - 10));
    y = 5 + Math.round(Math.random() * (canvasHeight - 10));
    pts.push([x, y]);
  }
  drawPoints();
}
function remove(nb = 1) {
  for (var i = 0; i < nb; i++) {
    pts.pop();
  }
  drawPoints();
}
function remove_all() {
  pts = [];
  drawPoints();
}
