const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papper;
function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  papper = new Papper(700, 320, 70, 70);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  Papper.display();
  drawSprites();
}
