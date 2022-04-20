standard_solution = document.getElementById("standard");
random_solution = document.getElementById("random");
// no_crossings_solution = document.getElementById("no-crossings"); //comming soon
// closest_solution = document.getElementById("closest"); //comming soon
exact_solution = document.getElementById("exact");

standard_solution.addEventListener(
  "click",
  function (event) {
    std_order = Array.from(Array(pts.length - 1).keys()).map((i) => i + 1);
    order = std_order;
    path_color = "#AAA";
    drawPoints();
  },
  false
);

random_solution.addEventListener(
  "click",
  function (event) {
    std_order = Array.from(Array(pts.length - 1).keys()).map((i) => i + 1);
    random_order = shuffle(std_order);
    order = random_order;
    path_color = "#4169e1";
    drawPoints();
  },
  false
);

// no_crossings_solution.addEventListener(
//   "click",
//   function (event) {
//     std_order = Array.from(Array(pts.length - 1).keys()).map((i) => i + 1);
//     random_order = shuffle(std_order);
//     clear();
//     drawPath(random_order, "#00F");
//     drawPoints();
//   },
//   false
// );

// closest_solution.addEventListener(
//   "click",
//   function (event) {
//     remaining = pts.length;
//     std_order = Array.from(Array(pts.length - 1).keys()).map((i) => i + 1);
//     current_x = pts[0][0];
//     current_y = pts[0][1];
//     order = Array(pts.length - 1);
//     j = 0;
//     while (std_order.length > 0) {
//       dmin = Infinity;
//       imin = 0;
//       for (var i = 0; i < std_order.length; i++) {
//         dx = pts[std_order[i]][0] - current_x;
//         dy = pts[std_order[i]][1] - current_y;
//         d = dx * dx + dy * dy;
//         if (d < dmin) {
//           imin = i;
//           dmin = d;
//         }
//       }
//       current_x = pts[std_order[imin]][0];
//       current_y = pts[std_order[imin]][1];
//       std_order.splice(imin, 1);
//       console.log(j, imin, dmin, std_order);
//       order[j] = imin;
//       j++;
//     }
//     clear();
//     drawPath(order, "#0FF");
//     drawPoints();
//   },
//   false
// );

exact_solution.addEventListener(
  "click",
  function (event) {
    if (pts.length > 1 && pts.length <= 10) {
      order_min = shortest();
      order = order_min;
      path_color = "#080";
      drawPoints();
    }
  },
  false
);

drawPoints();
