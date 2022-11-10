
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;
var ball;

var btn1;
var btn2;

var string;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
  
  

  ground =new Ground(200,390,400,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  
  ball2 = Bodies.circle(100,250,20,ball_options);
  World.add(world,ball2);

  string = Matter.Constraint.create({
 pointA:{x:200,y:20},
 bodyB:ball,
 length:100,
 stiffness:0.1
  });
  World.add(world,string);

  string2 = Matter.Constraint.create({
    bodyA:ball,
    bodyB:ball2,
    length:100,
    stiffness:0.1
     });
     World.add(world,string2);
   

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ground.show();
  
  stroke("purple");
  strokeWeight(1.9)
 line(string.pointA.x,string.pointB.y,ball.position.x,ball.position.y);
 line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);

  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
  


