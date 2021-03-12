var canvas;
var music;
let box1,box2,box3,box4, movingBox;

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100,600,200,50)
    box2 = createSprite(310,600,200,50)
    box3 = createSprite(520,600,200,50)
    box4 = createSprite(730,600,200,50)
    box1.shapeColor = "blue"
    box2.shapeColor = "green"
    box3.shapeColor = "yellow"
    box4.shapeColor = "red"


    //create box sprite and give velocity
    movingBox = createSprite(random(20,750),300,25,25)
    movingBox.velocityX = 7
    movingBox.velocityY = 7
}

function draw() {
    background("black");
    drawSprites()
    //create edgeSprite
    
    if (isTouching(movingBox,box1)){
        movingBox.shapeColor = box1.shapeColor
        movingBox.bounceOff(box1)
        music.play()
    }
    else if (isTouching(movingBox,box2)){
        movingBox.shapeColor = box2.shapeColor
        movingBox.bounceOff(box2)
    }
    else if (isTouching(movingBox,box3)){
        movingBox.shapeColor = box3.shapeColor
        music.stop()
        movingBox.velocityX = 0
        movingBox.velocityY = 0
    }
    else if (isTouching(movingBox,box4)){
        movingBox.shapeColor = box4.shapeColor
        movingBox.bounceOff(box4)
    }
    edges = createEdgeSprites();
    movingBox.bounceOff(edges);
    //add condition to check if box touching surface and make it box
}
