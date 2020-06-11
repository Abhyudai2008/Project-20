var car,wall
var speed,whight 
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
    whight=random(400,1500)
}



function draw() {
  background(0,0,0);  
  
  drawSprites();
}