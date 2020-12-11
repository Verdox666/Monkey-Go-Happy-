
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var ground
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,999999999,10);
  ground.velocityX= -4;
  
  foodGroup= createGroup();
  obstacleGroup= createGroup();
  


}

function draw() {
  background(255);

  stroke("white");
  textSize(20);
  fill("white");
  text("score: *+ score, 500,50");
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.ceil(frameCount/frameRate());
  text("score: "+ score, 100,50);

  
  if(keyDown("space")&& monkey.y>= 200) {
        monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  spawnClouds();
  spawnObstacle();
  
  monkey.collide(ground);
  
  drawSprites()
}


function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.089;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    foodGroup.add(banana)
  
  }
}

function spawnObstacle(){
 if (frameCount % 250 === 0){
   var obstacle = createSprite(600,320,10,40);
   obstacle.velocityX = -2;
    obstacle.scale = 0.14;
    obstacle.lifetime = 300;
   obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
 }
}



