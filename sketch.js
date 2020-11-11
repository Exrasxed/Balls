const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object, ground,object2;

function setup (){
  createCanvas (600,600);

  engine = Engine.create();
  world = engine.world;


  var obj_options ={
    restitution:1
  }
  object = Bodies.circle(300, 150, 25,obj_options);
  World.add(world,object);
object2 = Bodies.circle(500,150,25,obj_options);
  var g_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(300,500,600,20,g_options)
  World.add(world,ground);
  World.add(world,object2)
}

function draw (){
  background ("black"); 
  Engine.update(engine)
  ellipseMode(RADIUS);
  fill("blue")
  ellipse (object.position.x,object.position.y,25,25)
  ellipse (object2.position.x,object2.position.y,25,25)
rectMode(CENTER)
fill("orange")
rect (ground.position.x,ground.position.y,600,20)
}