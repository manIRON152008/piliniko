var part = [];
var ground = [];
var plinko = [];



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(468, 740);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(234 , 730, 468 , 20);
  wall = new Wall(470 , 740 , 5 , 300);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ground.display();


  if(frameCount%60===0){
    part.push(new Part(random(width/2-10 , width/2+10) , 10 , 10));
  }


for (var j = 0; j < part.length; j++){
  part[j].display();
}

for (var k = 0; k < wall.length; k++){
  wall[k].display();
}

for (var j = 40; j <=width; j=j+50){
  plinko.push(new plinko(j , 75));
}

for (var j = 15; j <=width-10; j=j+50){
  plinko.push(new plinko(j , 175));
}

}