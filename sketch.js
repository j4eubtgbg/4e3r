var ghost,ghostrun,ghostidle;
var edge1s;
var enemy;
var enemyAnim;


function preload() {
    ghostrun = loadAnimation("run1.png",'stand.png',"run2.png");
    ghostidle = loadAnimation("stand.png");

  //  enemyAnim = loadAnimation("1.png,2.png,3.png");

}

function setup(){
    createCanvas(600,400);
    ghost = createSprite(50,200,50,50);

    edge1s = createEdgeSprites();

    ghost.addAnimation('ghost',ghostrun);
    ghost.scale = 0.25;
    ghost.mirrorX(ghost.mirrorX() * -1);

    
}

function draw(){
    background("black");
drawSprites();
  if(keyDown("space")&&ghost.y>=348){
      ghost.velocityY = -8;
  }

ghost.velocityY = ghost.velocityY+0.5;
ghost.collide(edge1s);
ghostmake();
}

function ghostmake(){
    
        enemy = createSprite(600,350,50,50);
        enemy.addAnimation('idle',enemyAnim);
        enemy.velocityX = -6;
    
}