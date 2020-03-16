const c12 = () => {
  const canvas = document.getElementById("c12");
  const ctx = canvas.getContext("2d");
  
  // розміри канваса
  const canvasWidth = 400;
  const canvasHidth = 200;

  // ініт ліній
  let lines =  new Array;
  // стан нахжатості
  let pressed = false;

  var ball = {
    x:-100,
    y:0,
    radius:20,
    speed:2,
    color:"#F00",
    // індекс точок масива до якого рухається
    moveTo: 0,
    draw:function(){
      if(pressed) return;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
      ctx.closePath();
      ctx.fill();
    },
    handler: function(){
    if(lines.length < 2  || pressed) return;
    if(this.moveTo >= lines.length) this.moveTo = 0;
    if(this.moveTo == 0) {
      this.x = lines[0].x;
      this.y = lines[0].y;
      this.moveTo++;
    } else {
      var angle = Math.atan2(lines[this.moveTo].x - this.x,lines[this.moveTo].y - this.y);//Вернет угол в радианах между координатами центра круга и следующей точкой на линии
        if(Math.abs(this.x - lines[this.moveTo].x) < this.speed && Math.abs(this.y - lines[this.moveTo].y) < this.speed){
          this.x = lines[this.moveTo].x;
          this.y = lines[this.moveTo].y;
          this.moveTo++;
        }
        else{
          this.x += Math.sin(angle) * this.speed;
          this.y += Math.cos(angle) * this.speed;
        }    
      }
    }
};


 
function EVM_down(e){
  lines = new Array;
  ball.moveTo = 0;
  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY - canvas.offsetTop;
  lines.push({x:x,y:y});
  pressed = true;
}

function EVM_move(e){
  if(!pressed) return;
  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY - canvas.offsetTop;
  lines.push({x:x,y:y});
 }
 
 function EVM_up(e){
   if(!pressed) return;
    var x = e.clientX - canvas.offsetLeft;
    var y = e.clientY - canvas.offsetTop;
    lines.push({x:x,y:y});
    pressed = false;
 }
 
 function handler(){
  ctx.fillStyle = "#EEE";
  ctx.fillRect(0,0,canvasWidth, canvasHidth);
  if(lines.length > 1){
    ctx.strokeStyle = "#444";
    ctx.beginPath();
    ctx.moveTo(lines[0].x,lines[0].y);
    for(var i = 1; i < lines.length; i++) 
      ctx.lineTo(lines[i].x,lines[i].y);
     ctx.stroke();
     ctx.closePath();
  }
  ball.draw();
  ball.handler();
  setTimeout(handler,1000/60);
 }


  canvas.addEventListener("mousedown", EVM_down);
  canvas.addEventListener("mouseup", EVM_up);
  canvas.addEventListener("mousemove", EVM_move);
  handler();

}; // c12

export default c12;
