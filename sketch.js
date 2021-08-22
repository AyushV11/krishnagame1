
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone,ground,stoneObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var flag = 0


var launcher;

function preload(){
	boy=loadImage("images/Krishna.png");
  boy1=loadImage("images/krishnawin.png");
  gopi=loadImage("images/gopi.png");

}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(235,420,20); 

	mango1 = new Mango(1100,100,100);
  /*mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	mango6 = new Mango(1000,230,30);
	mango7 = new Mango(900,230,40);
	mango8 = new Mango(1140,150,40);
	mango9 = new Mango(1100,230,40);
	mango10 = new Mango(1200,200,40);
	mango11 = new Mango(1120,50,40);
	mango12 = new Mango(900,160,40);*/

	tree = new Tree(500,500);
	ground = new Ground(width/2,600,width,20);

  //create launcher with stone as bodyA
  launcher = new Launcher(stone.body,{x:285,y:420});

	Engine.run(engine);
}

function draw() {

  background("lightblue");
  Engine.update(engine);
  textSize(25);
  text("Hit the pot with the stone!!",50 ,100);
  text("Press space bar to collect the stone!!",50 ,50);
  image(boy ,80,200,500,500);
  image(gopi,0,350,300,200)
 
  tree.display();
  stone.display();


  mango1.display();
 

  //stone.display();
  ground.display();
  launcher.display();


 detectollision(stone,mango1);

 /*var collision= Matter.SAT.collides(stone.body,tree.body)
  if(collision.collided){
    flag=1
    //crashSound.play()
  }

  if(flag===1){
    textSize(50)
    text ("crash",width/2,height/2)
    
  }*/
 
}

function mouseDragged()
{
  // Set position of stone when mouse is dragged
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
	launcher.fly();
}

function keyPressed(){
  if(keyCode===32){
    launcher.attach(stone.body)
  }
}

function detectollision(lstone,ltree){

  treeBodyPosition=ltree.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, treeBodyPosition.x, treeBodyPosition.y)
  	if(distance<=ltree.r+lstone.r)
    {
  	  Matter.Body.setStatic(ltree.body,false);

flag=1
    }
    if(flag===1){
      image(boy1,0,150,600,600)
      text ("YEAH!!!!! GOT THE BUTTER",width/2,height/2)
    }

  }