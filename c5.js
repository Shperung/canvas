const c5 = () => {
  const canvas = document.getElementById("c5");
  const ctx = canvas.getContext("2d");
  let x = 0;
  let y = 0;
  let timet = null;

  drawSin();

  function drawSin() {
    y = Math.sin(x);
    //y = Math.atan(x);
    // поки в рамках канваса
    if (x >= 400) {
      x = 0;
    } else {
      // рекурсивно добавляю діч
      x += 0.02;
    }
    ctx.fillRect(5 * x, 50 + 25 * y, 2, 2);
    ctx.fillRect(5 * x, 150 + x * y, 2, 2);
    timet = setTimeout(drawSin, 2);
  }
}; // c5

export default c5;
