var pathIMG 
var runner 
var boy
var lb
var rb
var edges 

function preload(){
  //pre-load images
  pathIMG = loadImage("path.png")
  runner = loadAnimation("Runner-1.png", "Runner-2.png")


}


function setup(){
  createCanvas(400,400);
  //create sprites here


// Moving background
path = createSprite(200,200)
path.addImage(pathIMG)
path.velocityY = 4;
path.scale=1.2

boy = createSprite(200,180,10,20)
boy.scale = 0.1
boy.addAnimation("Run", runner)
lb = createSprite(0,0,100,800)
rb = createSprite(410,0,100,800)


}

function draw() {
  background(0);

  // code to reset the background
  if(path.y > 400){
    path.y = height/2;
  }

  boy.x = mouseX

  edges = createEdgeSprites()
  boy.collide(edges[3])
  boy.collide(lb)
  boy.collide(rb)




  drawSprites()
}
