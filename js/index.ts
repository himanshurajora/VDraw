// const Victor = require("./victor");


const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement
const width = canvas.width
const height = canvas.height
var context = canvas.getContext("2d")
var mouseX =0, mouseY=0;
var canvasX = canvas.getBoundingClientRect().left, canvasY = canvas.getBoundingClientRect().top

var speed = 0.1;
var dropsPerCount = 10;

canvas.addEventListener("mousemove", function(e:MouseEvent){
  mouseX = e.clientX - canvasX
  mouseY = e.clientY - canvasY
})

interface Point{
  x:number
  y:number
}
class Line{
  startPoint:Point = {x:1, y:2}
  endPoint:Point = 0;
  startTed:boolean = false;
  var setStart(){
    
  }

}

function renderLine(context:CanvasRenderingContext2D) : void{

}

const render = () => {
    context.clearRect(0,0,width, height)
    context.fillStyle = "rgb(230,230,230)"
    context.fillRect(0,0,width,height)
    context.fillStyle = "black"
    context.fillText(`x : ${mouseX}, y : ${mouseY}`, 5,20, 300)
    requestAnimationFrame(render)
}
requestAnimationFrame(render)
