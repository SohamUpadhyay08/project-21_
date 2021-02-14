var thickness,wall
var speed,weight,bullet;
var damage;
var speedT,weightT,damageT;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed = random(100,221);
  weight = random(30,52);
  bullet = createSprite(10,200,100,10);
  bullet.shapeColor="white";
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  
}

function draw() {
  background("black");
  textSize(20);
  fill("red");
  speedT = speed;
  weightT = weight;
  damageT = damage;
  
if(hasCollided(bullet,wall)){
  bullet.velocityX = 0; 
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(damage>10){
    wall.shapeColor = color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor = color(0,255,0)
  }
}
 
  drawSprites();
  text("Speed:"+ speedT , 500,40);
  text("weight:"+ weightT , 500,90);
  text("damage:"+ damageT,500,130);
}
  function hasCollided(lbullet,lwall){
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true;
    }
     return false;
}
