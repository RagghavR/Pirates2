const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;

function preload() {
 bgI = loadImage("assets/background.gif")

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(150,150,100,50,-PI/4)
  ball = new Cannonball(cannon.x+25,cannon.y-31)
  

}

function draw() {
  background(bgI);
  Engine.update(engine);

  ground.display();
  cannon.display()
  tower.display();
  ball.display()
 
}

function keyReleased(){
  if(keyCode == DOWN_ARROW){
    ball.fire()
  }
}
