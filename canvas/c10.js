const c10 = () => {
  const canvas = document.getElementById("c10");
  const ctx = canvas.getContext("2d");
  let requestAnimation = null;

  let x = 0;
  let y = 0;
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";

  function draw() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    y = -x * x;
    ctx.fillRect(200 + 30 * x, 150 + 30 * y, 8, 8);
    ctx.fillRect(200 + 30 * -x, 150 + 30 * y, 8, 8);
    x += 0.005;

    ctx.fill();
    ctx.stroke();
    requestAnimation = requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}; // c10

export default c10;
