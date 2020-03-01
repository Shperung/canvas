const c3 = () => {
  const canvas = document.getElementById("c3");
  const ctx = canvas.getContext("2d");

  canvas.onpointerdown = () => {
    canvas.onmousemove = event => {
      const x = event.offsetX;
      const y = event.offsetY;
      // малюю прамокутник
      ctx.fillRect(x, y, 10, 10);
    };

    canvas.onpointerup = () => (canvas.onmousemove = null);
  };
}; // c3

export default c3;
