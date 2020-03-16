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

    //https://github.com/finnursig/VideoScroller/blob/master/src/EasingFunctions.js

    if (timePassed < duration * 3) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let t = timePassed / duration;
      let t5 = timePassed / duration;
      let t6 = timePassed / duration;
      // без easing, без прискорення
      let x1 = t * 400;
      // прискорення з нульової швидкості
      let x2 = Math.pow(t, 2) * 400;
      // тройне прискорення з нульової швидкості
      let x3 = Math.pow(t, 3) * 400;
      // уповільнення до нульової швидкості
      let x4 = (t*(2-t)) * 400;
      //прискорення до півдороги, потім уповільнення
      let x5 = (t5<.5 ? 2*t5*t5 : -1+(4-2*t5)*t5) * 400
      // уповільнення до нульової швидкості
      const x6 = ((--t6)*t6*t6+1) * 400

      // рух по різних функціях
      //const x4 = (1 - Math.sin(Math.acos(t))) * 400;
      //const x5 = (1 - Math.sin(((1 - t) * Math.PI) / 2)) * 400;
      //const x6 = (1 - Math.sin(((1.3 - t) * Math.PI) / 2)) * 400;

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
