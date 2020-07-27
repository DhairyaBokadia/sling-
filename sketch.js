const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



function setup() {
  createCanvas(800,400);

  
  stone1=new Stone(200,200,20);

}

function draw() {
  background(255,255,255);  

  circleMode(CENTER);
  
  stone1.display();


  drawSprites();
}