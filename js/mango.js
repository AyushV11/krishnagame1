class Mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :1.3,
            friction :0,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/butterpot.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push();
		translate(mangoPos.x, mangoPos.y);
		imageMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop();
 }
}