var movingBlock, fixedBlock;



function setup() {
  createCanvas(800,400);
 trex = createSprite(400, 200, 50, 50);
 obstacle = createSprite(200, 200, 50, 50);


}

function draw() {
  background("Black"); 
 trex.x = mouseX;
 trex.y = mouseY; 

 if(isTouching(trex,obstacle)){
   trex.shapeColor = "red";
   obstacle.shapeColor = "red"; 


 } else{
  trex.shapeColor = "blue";
  obstacle.shapeColor = "blue"; 

 }
  drawSprites();

}
//food,water parameter
function isTouching (fixedBlock,movingBlock) {
if(fixedBlock.x - movingBlock.x === movingBlock.width/2 + fixedBlock.width/2 || 
 movingBlock.x - fixedBlock.x === movingBlock.width/2 + fixedBlock.width/2 || 
 fixedBlock.y - movingBlock.y === movingBlock.height/2 + fixedBlock.height/2 || 
 movingBlock.y - fixedBlock.y === movingBlock.height/2 + fixedBlock.height/2 ){
return true
} else{
return false

}

}




