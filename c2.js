const c1 = () => {
  const canvas = document.getElementById("c2");
  const ctx = canvas.getContext("2d");

  // заливка прямокутника
  ctx.fillStyle = "green";
  ctx.fillRect(200, 50, 150, 75);
  ctx.fillStyle = "blue";
  ctx.fillRect(150, 100, 100, 50);

  // стирання всього
  //ctx.clearRect(0, 0, 400, 200);

  // рект
  ctx.strokeStyle = "green";
  ctx.lineWidth = "4";
  ctx.rect(50, 50, 100, 100);
  ctx.stroke();
  ctx.fillStyle = "orange";
  ctx.fill();
}; // c1

export default c1;
