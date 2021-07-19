var bird,birdImg;
var backgroundImg, bg;
var halfPillarDown, halfPillarUp, fullPillarUp,fullPillarDown;
var halfPillarDownImg, halfPillarUpImg, fullPillarUpImg ,fullPillarDownImg,quarterPillarUpImg,quarterPillarDownImg;

function preload(){
  birdImg = loadAnimation("images/bird1.png","images/bird2.png","images/bird3.png","images/bird4.png");
  backgroundImg = loadImage("images/underwater4.jpg");
  halfPillarDownImg = loadImage("images/half_pillar_down.png");
  halfPillarUpImg = loadImage("images/half_pillar_up.png");
  fullPillarUpImg = loadImage("images/pillar_up.png");
  fullPillarDownImg = loadImage("images/pillar_down.png");
  quarterPillarDownImg = loadImage("images/1_4_pillar_down.png")
  quarterPillarUpImg = loadImage("images/1_4_pillar_up.png")

}

function setup() {
  createCanvas(1365,770);
  bird = createSprite(200,400,20,20)
  bird.addAnimation("Bird",birdImg);
  bird.scale = 0.5
  bird.depth = 10

  bg = createSprite(750,400);
  bg.x = bg.width/2
  bg.addImage(backgroundImg);
  bg.scale = 2
  bg.velocityX = -3
  bg.depth = 1

}

function draw() {
  background(280);  


 if(bg.x<350){
   bg.x = 900
  }

  if(keyDown("up")){
    bird.y -=6
  }
  if(keyDown("down")){
    bird.y +=6
  }


  spawnPillars();
  
  drawSprites();
}

function spawnPillars(){
  if(frameCount % 80 ===0){
    var pillar1 = createSprite(1500,100);
    var pillar2 = createSprite(1500,600);
    var randomPillar = Math.round(random(1,3))
    if(randomPillar === 1){
      pillar1.addImage(halfPillarUpImg);
      pillar2.addImage(halfPillarDownImg)
      pillar1.scale = 0.5;
      pillar2.scale = 0.5;
      pillar1.y = Math.round(random(50,300));
      pillar2.y = Math.round(random(600,800))
    }
    else if(randomPillar === 2){
      pillar1.addImage(quarterPillarUpImg);
      pillar2.addImage(fullPillarDownImg)
      pillar1.scale = 0.4;
      pillar2.scale = 0.7;
      pillar1.y = Math.round(random(50,200));
      pillar2.y = Math.round(random(600,800))
    } 
    else {
      pillar1.addImage(fullPillarUpImg);
      pillar2.addImage(quarterPillarDownImg)
      pillar1.scale = 0.7;
      pillar2.scale = 0.4;
      pillar1.y = Math.round(random(50,200));
      pillar2.y = Math.round(random(600,800))
    } 
  
    pillar1.velocityX = -4
    pillar2.velocityX = -4

  }
}