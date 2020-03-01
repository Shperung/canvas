const c1 = () => {
  const canvas = document.getElementById("c2");
  const ctx = canvas.getContext("2d");

  // Лінії
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.lineWidth = "4";
  ctx.moveTo(100, 50);
  ctx.lineTo(150, 150);
  ctx.lineTo(150, 50); // з останньої точки малюю іншу діч
  ctx.lineCap = "square"; // добавляються крадрати
  ctx.stroke();

  // розриваю суцільну і роблю нову
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = "20";
  ctx.moveTo(150, 50);
  ctx.lineTo(50, 100);
  ctx.lineCap = "butt"; // по замовчуванню
  ctx.lineCap = "round"; // заокруглюю краї
  ctx.stroke();

  // розриваю суцільну і роблю нову
  ctx.beginPath();
  ctx.strokeStyle = "orange";
  ctx.lineWidth = "16";
  ctx.moveTo(250, 150);
  ctx.lineTo(250, 100);
  ctx.lineTo(200, 100);
  ctx.lineCap = "round"; // заокруглюю краї
  ctx.stroke();

  // трикутник
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.lineWidth = "3";
  ctx.moveTo(300, 150);
  ctx.lineTo(350, 50);
  ctx.lineTo(400, 150);
  // ctx.lineTo(300, 150); // або лінія яка повертає то стартового або закриваю, командою внизу
  ctx.closePath();
  ctx.fillStyle = "yellow";
  ctx.stroke();
  ctx.fill();
}; // c2

export default c1;
