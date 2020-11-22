var car,wall;
var speed,width;
function setup() {
  createCanvas(1600,400);
speed=random(55,90)
width=random(400,1500)

}

function draw() {
  background(255,255,255); 
  car=createSprite(50,200,50,50)
wall=createSprite(1500,200,60,height/2)

  drawSprites();
}
