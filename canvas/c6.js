const c6 = () => {
  const canvas = document.getElementById("c6");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "red";
  ctx.strokeStyle = "green";
  ctx.moveTo(200, 50);
  ctx.quadraticCurveTo(150, 0, 110, 50);

  ctx.quadraticCurveTo(50, 150, 200, 200);
  ctx.quadraticCurveTo(350, 150, 290, 50);

  ctx.quadraticCurveTo(250, 0, 200, 50);
  ctx.stroke();
  ctx.fill();
}; // c6

export default c6;
