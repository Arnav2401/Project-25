class Trash{
    constructor(x,y){
        var option={
             restitution : 0.3,
             density : 1.2,
             friction : 0
         }
        this.body = Bodies.circle(x,y,35,option)//variable
        this.radius = 35
        World.add(world,this.body)
        this.image = loadImage("paper.png")

    }
    display(){
        ellipseMode(RADIUS)
        // this.body.position.x = mouseX
        // this.body.position.y = mouseY
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}