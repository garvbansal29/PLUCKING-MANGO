
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var tree,stone;
var human,slingshot;
var ground;
var mango,mango2,mango3,mango4,mango5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,450,1200,20);
  tree = new Tree(700,10);
  
	stone = new Stone(290,310);
	human = new Human(280,260);
  mango = new Mango(850,100);
  mango2 = new Mango(800,150);
  mango3 = new Mango(900,150);
  mango4 = new Mango(1000,50);
  mango5 = new Mango(1000,180);

  slingshot = new slingShot(stone.body,{x:290,y:310});
	
    




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  tree.display();
  
  stone.display();
  human.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  slingshot.display();


  
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}



