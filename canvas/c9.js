const c9 = () => {
  const canvas = document.getElementById("c9");
  const ctx = canvas.getContext("2d");

  const grad = ctx.createLinearGradient(0, 0, 500, 0);

  grad.addColorStop(0, "magenta");
  grad.addColorStop(0.5, "blue");
  grad.addColorStop(1, "green");

  ctx.fillStyle = grad;

  ctx.font = "bold 40px Arial";
  ctx.fillText("Hello world!", 55, 90);
}; // c9

export default c9;
