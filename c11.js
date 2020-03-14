const c11 = () => {
  const canvas = document.getElementById("c11");
  const ctx = canvas.getContext("2d");
  let requestAnimation = null;

  let intreval = null;

  const duration = 6000;
  let start = Date.now();

  ctx.strokeStyle = "blue";
  ctx.fillStyle = "blue";

  intreval = setInterval(() => {
    let timePassed = Date.now() - start;

    if (timePassed < duration * 3) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const timeDivide = timePassed / duration;
      const x1 = timeDivide * 400;
      const x2 = Math.pow(timeDivide, 2) * 400;
      const x3 = Math.pow(timeDivide, 3) * 400;
      const x4 = (1 - Math.sin(Math.acos(timeDivide))) * 400;
      const x5 = (1 - Math.sin(((1 - timeDivide) * Math.PI) / 2)) * 400;
      const x6 = (1 - Math.sin(((1.3 - timeDivide) * Math.PI) / 2)) * 400;

      ctx.fillRect(x1, 25 - 4, 8, 8);
      ctx.fillRect(x2, 50 - 4, 8, 8);
      ctx.fillRect(x3, 75 - 4, 8, 8);
      ctx.fillRect(x4, 100 - 4, 8, 8);
      ctx.fillRect(x5, 125 - 4, 8, 8);
      ctx.fillRect(x6, 150 - 4, 8, 8);

      ctx.fill();
      ctx.stroke();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      clearInterval(intreval);
    }
  }, 16);
}; // c11

export default c11;
