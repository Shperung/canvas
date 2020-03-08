const c7 = () => {
  const canvas = document.getElementById("c7");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "green";
  ctx.strokeStyle = "black";

  canvas.onmousemove = function(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    ctx.clearRect(0, 0, 400, 200);
    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.quadraticCurveTo(x, y, 200, 150);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.moveTo(200, 50);
    ctx.lineTo(x, y);
    ctx.lineTo(200, 150);
    ctx.stroke();
  };
}; // c7

export default c7;
