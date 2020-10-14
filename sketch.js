
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime
var ground,groundImage

var gameState="END"
var gameState="PLAY"

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  groundImage = loadImage("banana.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  obstacle = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,600)
  
monkey=createSprite(100,500,10,10)
 monkey.addAnimation("running", monkey_running);
  monkey.scale=0.2
  
  ground=createSprite(300,560,600,5)
 ground.visible=false
  
  foodGroup=new Group()
    obstacleGroup=new Group()
  
  SurvivalTime=0

textSize(30)
   stroke("orange")
  fill("green")
}


function draw() {
 background("skyblue")
  
   text("SurvivalTime:"+ SurvivalTime, 200,100);
  
  ground.velocityX=-3  

if(gameState==="END"){
  
  monkey.destroy()
  
  foodGroup.destroyEach()
    obstacleGroup.destroyEach()
}
  
 if(monkey.isTouching(foodGroup)){ 
     foodGroup.destroyEach();
    SurvivalTime=SurvivalTime+1
  }
  
  if(monkey.isTouching(obstacleGroup)){ 
    gameState="END"
  
  }
  
  monkey.debug=true
  
if(keyDown("space")&&monkey.y>=300){
    
 monkey.velocityY=-10}
    monkey.velocityY= monkey.velocityY+0.8
  
    monkey.collide(ground)
    
    if(ground.x<200){
      ground.x = ground.width/2
    }

 

  bananas()
  obstacles()
  
  
  drawSprites()
}


function bananas(){
if(frameCount%120===0){  
    var banana=createSprite(700,300)
   banana.velocityX=-6
  banana.addImage(bananaImage)
  banana.x=Math.round(random(700,400))
  banana.lifetime=800
  foodGroup.add(banana)
banana.scale=0.2
}
}

function obstacles(){
if(frameCount%180===0){  
    var obstacle=createSprite(900,520)
   obstacle.velocityX=-6
  obstacle.addImage(obstacleImage)
  obstacle.x=Math.round(random(900,520))
  obstacle.lifetime=800
  obstacleGroup.add(obstacle)
obstacle.scale=0.2 
}
}
