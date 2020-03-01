const c3 = () => {
  const canvas = document.getElementById("c3");
  const colorInput = document.getElementById("input-color-c3");
  const ctx = canvas.getContext("2d");
  let fillColor = "green";

  colorInput.oninput = function() {
    fillColor = this.value;
  };

  canvas.onpointerdown = () => {
    canvas.onmousemove = event => {
      ctx.fillStyle = fillColor;
      const x = event.offsetX;
      const y = event.offsetY;
      // малюю прамокутник
      ctx.fillRect(x, y, 10, 10);
      ctx.fill();
    };

    canvas.onpointerup = () => (canvas.onmousemove = null);
  };
}; // c3

export default c3;
