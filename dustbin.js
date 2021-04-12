class Dustbin{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.width = w
        this.height = h
        this.image = loadImage("trashcangreen.png")
        World.add(world,this.body)
    }
display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
// image(this.image,this.body.position.x,this.body.position.y)
}


}