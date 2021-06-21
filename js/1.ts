

function init(){
    var stage = new createjs.Stage("canvas")
    var circle = new createjs.Shape()
    circle.graphics.beginFill("#00ff00").drawCircle(200,200,50)
    circle.addEventListener("click", (e : Object)=>{
        console.log(((e as createjs.MouseEvent).currentTarget as createjs.Shape).getBounds().x)
    })
    stage.addChild(circle)
    stage.update()    
}
