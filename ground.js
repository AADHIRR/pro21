class Ground

{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
       // ground = Bodies.rectangle(210,21,21,21,options)

	}
	display()
    
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			stroke('yellow')
			fill('yellow')
			rect(0,0,this.w, this.h);
			pop()
			
	}

}