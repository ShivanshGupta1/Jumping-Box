const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object, object2;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
var option={
  "isStatic":true
}
var option2 = {
  restitution:1
}
object=Bodies.rectangle(200,400,50,50,option);
object2 = Bodies.circle(200,200,30,option2 );
World.add(world,object);
World.add(world,object2);
console.log(object);

}

function draw() {
  Engine.update(engine);
  background(0); 
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,50);
  ellipseMode(RADIUS)
  ellipse(object2.position.x,object2.position.y,30);
}

