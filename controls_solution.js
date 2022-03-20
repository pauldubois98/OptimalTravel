standard_solution = document.getElementById("standard");
random_solution = document.getElementById("random");
exact_solution = document.getElementById("exact");

standard_solution.addEventListener(
  "click",
  function (event) {
    std_order = Array.from(Array(pts.length - 1).keys()).map((i) => i + 1);
    clear();
    drawPath(std_order, "#999");
    drawPoints();
  },
  false
);

random_solution.addEventListener(
  "click",
  function (event) {
    std_order = Array.from(Array(pts.length - 1).keys()).map((i) => i + 1);
    random_order = shuffle(std_order);
    clear();
    drawPath(random_order, "#00F");
    drawPoints();
  },
  false
);

exact_solution.addEventListener(
  "click",
  function (event) {
    if (pts.length > 1 && pts.length < 10) {
      order_min = shortest();
      clear();
      drawPath(order_min, "#F00");
      drawPoints();
    }
  },
  false
);
