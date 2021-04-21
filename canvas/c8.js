const c8 = () => {
  const canvas = document.getElementById("c8");
  const ctx = canvas.getContext("2d");

  ctx.strokeStyle = "blue";
  ctx.lineWidth = 8;

  // сама крива
  ctx.beginPath();
  ctx.moveTo(50, 200);
  ctx.bezierCurveTo(50, 100, 200, 100, 200, 150);
  ctx.stroke();
  // контрольні точки
  ctx.strokeStyle = "green";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(50, 200);
  ctx.lineTo(50, 100);
  ctx.lineTo(200, 100);
  ctx.lineTo(200, 150);
  ctx.stroke();

  // сама крива
  ctx.beginPath();
  ctx.moveTo(250, 200);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 8;
  ctx.bezierCurveTo(250, 100, 300, 200, 300, 50);
  ctx.stroke();
}; // c8

export default c8;
