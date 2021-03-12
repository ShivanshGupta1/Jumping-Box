let fixedRec, movingRec;
function setup() {
  createCanvas(800, 400);
  fixedRec = createSprite(100, 200, 100, 100);
  movingRec = createSprite(750, 200, 50, 50);
  // fixedRec.velocityX = 2;
  movingRec.velocityX = -2;
  fixedRec.shapeColor = "blue";
  movingRec.shapeColor = "green";
}
function draw() {
  background("black");
  if (isTouching(movingRec, fixedRec)) {
    text("Yes, they are touching", 50, 50);
  }
  else {
    text("No, they are not touching", 50, 50);
  }
  // bounce(movingRec,fixedRec);
  // collide(movingRec, fixedRec);
  bounceOff(movingRec,fixedRec);
  drawSprites();
}
