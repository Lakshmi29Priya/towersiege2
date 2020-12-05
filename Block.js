class Block{
    constructor(x,y,width,height){
var options={
    isStatic:false,
    restitution:0,
    friction:1
}
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.body=Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body);
}
display(){
    var position=this.body.position
    push()
  rectMode(CENTER);
    translate(position.x,position.y)
    rotate(this.body.angle)
fill(255,0,255)
rect(0,0,this.width,this.height)
pop()
}
}