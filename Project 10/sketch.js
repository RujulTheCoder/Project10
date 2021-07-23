var sea;
var seaImg;
var ship, shipImg1, seaImg2;

function preload(){

seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(200,200,0,0);
  sea.scale = 0.3;
  sea.addImage("seaBg",seaImg);

  ship = createSprite(100,200,50,50);
  ship.addAnimation("moving", shipImg1);
ship.scale = 0.2;
ship.x = 130;


}

function draw() {
  background("blue");

  sea.velocityX=-2;

if (sea.x < 0) {
  sea.x=sea.width/2;
}
  

 drawSprites();
}