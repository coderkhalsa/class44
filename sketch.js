var player 
var panimation
var ground , groundImg ,inGr
var obImg, obsGroup,gameState = "play"
var submit,ans,quest
function preload(){
panimation = loadAnimation("i/frame_00_delay-0.04s.gif","i/frame_01_delay-0.04s.gif","i/frame_02_delay-0.04s.gif","i/frame_03_delay-0.04s.gif","i/frame_04_delay-0.04s.gif","i/frame_05_delay-0.04s.gif","i/frame_06_delay-0.04s.gif","i/frame_07_delay-0.04s.gif","i/frame_08_delay-0.04s.gif","i/frame_09_delay-0.04s.gif","i/frame_10_delay-0.04s.gif","i/frame_11_delay-0.04s.gif")
groundImg = loadImage("i/realGround.png")
obImg = loadImage("i/ob1.png")






}

function setup() {
  createCanvas(displayWidth -50 , displayHeight - 150);
 player =  createSprite(100, displayHeight-500, 50, 50);
 player.addAnimation("mario",panimation)
 player.scale = 0.2
 ground = createSprite(displayWidth/2, displayHeight-200, 50, 50);
ground.addImage("ground",groundImg)
ground.x  = ground.width/6
ground.scale = 3.5
ground.velocityX = -2
inGr = createSprite(100, displayHeight-400, 400, 50);
obsGroup = new Group()





}

function draw() {
  background(0); 
  if (gameState === "play"){

  
  if(ground.x<200){
    ground.x  = ground.width/2
  } 
  if(keyDown("space")){
    player.velocityY = -15
  }
  player.velocityY = player.velocityY +0.5
  
  problem()
  if(obsGroup.isTouching(player)){
    gameState = "end"
  }
} else if(gameState=== "end"){
  ground.velocityX =0
  player.velocityY = 0 
  obsGroup.setVelocityXEach(0)
 askRiddle()
 submit.mousePressed(()=>{
   quest.hide()
   ans.hide()
   submit.hide()
 })
}
player.collide(inGr)
  drawSprites();
}

function problem(){
  if(World.frameCount %100 ===0){
    var obs = createSprite(displayWidth,player.y ,10,10)
    obs.addImage("ob1",obImg)
    obs.velocityX = -4
    obsGroup.add(obs)
  }
}

function askRiddle(){

  quest = createElement("h2")
quest.position (200,200)
quest.html("hese is ur q.")
ans = createInput("YOUR ANSWER")
ans.position(200,250)
submit = createButton("DONE")
submit.position(200,300)



} 
