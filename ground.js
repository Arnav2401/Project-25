class Ground{
	constructor(x,y){
		var options={
			isStatic: true
		}
		this.body = Bodies.rectangle(x,y,1200,10,options)
		this.width = 1200 
		this.height = 10 
		World.add(world,this.body)
	}
	display(){
		rectMode(CENTER)
		fill("orange")
		rect(this.body.position.x,this.body.position.y,this.width,this.height)
	}

}