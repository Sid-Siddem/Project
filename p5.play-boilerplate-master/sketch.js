var astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping", sleep);
astronaut.scale = 0.1;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
function preload(){
    bg= loadImage("images/iss.png");
    sleep = loadAnimation("images/sleep.png");
    brush = loadAnimation("images/brush.png");
    gym = loadAnimation("images/gym21.png","images/gym22.png");
    eat = loadAnimation("eat1.png","eat2.png");
    drink = loadAnimation("drink1.png");
    move = loadAnimation("move.png","move1.png");
    bath = loadAnimation("bath1.png","bath2.png");
}
function draw() {
  background(255,255,255);  
  drawSprites();
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating", eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}  
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing", bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;                 
}
}