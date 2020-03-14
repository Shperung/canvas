const c3 = () => {
  const canvas = document.getElementById("c3");
  const colorInput = document.getElementById("input-color-c3");
  const ctx = canvas.getContext("2d");
  let fillColor = "black";

  colorInput.oninput = function() {
    fillColor = this.value;
  };

  ctx.lineWidth = 6 * 2;

  canvas.onpointerdown = () => {
    ctx.beginPath();
    canvas.onmousemove = event => {
      ctx.fillStyle = fillColor;
      ctx.strokeStyle = fillColor;
      const x = event.offsetX;
      const y = event.offsetY;
      // малюю лінію
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    canvas.onpointerup = () => (canvas.onmousemove = null);
  };
}; // c3

export default c3;
