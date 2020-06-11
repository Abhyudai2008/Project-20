var car,wall
var speed,weight 
function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "yellow";
  car.velocityX = 5;
     this.x = 50
     this.y = 200
   wall = createSprite(1100, 200, 60, height/2);
    wall.shapeColor = "grey" ;
    speed=random(55,90)
    weight=random(400,1500)
}



function draw() {
  background(0,0,0);  
   function hasCollided(bullet, wall) 
{
  carRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if (carRightEdge>=wallLeftEdge)
{
  return true
}
 return false;
}
if(hasCollided(car, wall))
{
  car.velocityX=0;
  var damage=0.5 * weight * speed*speed;

  if(damage<10)
 {
    wall.shapeColor=color(0,255,0);
 }
}
  drawSprites();
}