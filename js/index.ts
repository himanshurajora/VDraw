// const Victor = require("./victor");


const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement
const width = canvas.width
const height = canvas.height
var context = canvas.getContext("2d")
var x = 0, y = 0
var speed = 0.01;

class Drop { 
    private x: number
    private y: number
    private selfHeight: number

    constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.selfHeight = Math.random() * 20 + 20
    }
    public draw(context: CanvasRenderingContext2D) {
        context.beginPath()
        context.moveTo(this.x, this.y)
        context.lineTo(this.x, this.y + this.selfHeight)
        context.stroke()
    }
}


for (var i = 0; i <= 10; i++) {
    var drop = new Drop()
    drop.draw(context)
}

// const render = () => {
//     for(var i =1; i<=10; i++){

//     }
//     requestAnimationFrame(render)
// }

// requestAnimationFrame(render)

