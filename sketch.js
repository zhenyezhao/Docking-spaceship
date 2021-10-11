var spacecraft1Image,spacecraft2Image,spacecraft3Image,spacecraft4Image;
var backgroundImage,ISSImage;
var hasDocked=false
function preload(){
spacecraft1Image=loadImage("spacecraft1.png");
spacecraft2Image=loadImage("spacecraft2.png");
spacecraft3Image=loadImage("spacecraft3.png");
spacecraft4Image=loadImage("spacecraft4.png");
backgroundImage=loadImage("spacebg.jpg");
ISSImage=loadImage("iss.png");

}
function setup() {
  createCanvas(1200,600);
  spacecraft=  createSprite(300, 400);
  spacecraft.addImage(spacecraft1Image);
  spacecraft.scale=0.25
  ISS=createSprite(630,200);
  ISS.addImage(ISSImage)
  ISS.scale=0.95
}

function draw() {
  background(backgroundImage);  
  drawSprites();
if(keyDown("UP_ARROW")){
  spacecraft.y=spacecraft.y-3
}
if(keyDown("DOWN_ARROW")){
  spacecraft.addImage(spacecraft2Image);

}
if(keyDown("LEFT_ARROW")){
  spacecraft.addImage(spacecraft3Image);
  spacecraft.x=spacecraft.x-1;
}
if(keyDown("RIGHT_ARROW")){
  spacecraft.addImage(spacecraft4Image);
  spacecraft.x=spacecraft.x+1;
}
if(!hasDocked){
  spacecraft.x=spacecraft.x+random(-1,1);

}
if(spacecraft.y<=(313)&&spacecraft.x<=(576)){
  hasDocked=true
  textSize(25);
  fill("white");
  text("docking successful",200,300);
}
console.log("x,y"+spacecraft.x+","+spacecraft.y);
}
