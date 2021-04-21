const c4 = () => {
  const canvas = document.getElementById("c4");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.lineWidth = "4";
  ctx.strokeStyle = "red";
  ctx.fillStyle = "yellow";
  // x, y центр кола
  //anticlockwise по часові
  //ctx.arc(x, y, radius, angleStart, angleEnd, anticlockwise); angle-radian
  ctx.arc(150, 100, 75, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.lineWidth = "4";
  ctx.strokeStyle = "green";
  ctx.fillStyle = "pink";
  // x, y центр кола
  //anticlockwise по часові
  //ctx.arc(x, y, radius, angleStart, angleEnd, anticlockwise); angle-radian
  ctx.arc(250, 100, 45, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fill();
}; // c4

export default c4;
