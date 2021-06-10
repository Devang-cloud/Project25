
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground
var Side1
var Side2
var Side3

function preload(){
 
	img=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800,750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600,25);	
  ground = new Ground(400, 750, 800, 30);
   Side1= new Dustbin(550,650, 20, 200);
  Side2 = new Dustbin(610, 725, 100, 20);
  Side3 = new Dustbin(670, 650, 20, 200);
  
 

	Engine.run(engine);
}


function draw() {
  background(225);
  Engine.update(engine);
  rectMode(CENTER);
  Side1.display();
  Side2.display();
  Side3.display();
  paper.display();
  ground.display();
  imageMode(CENTER)
  image(img,610,635,130,180)
  
  

 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:105,y:-105});
	}
}



