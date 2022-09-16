var barco, barcoanimacao;
var mar, marImagem;
function preload(){
  barcoanimacao = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  marImagem = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  mar=createSprite(200,200,20,20);
  mar.addImage("onda", marImagem);
  mar.x=mar.width /2;
  mar.velocityX=-4;

  barco=createSprite(150,300,100,100);
  barco.addAnimation("animacao", barcoanimacao);
  barco.scale=0.2;
}

function draw() {
  background("blue");
  if (mar.x < 0){
    mar.x = mar.width /2;
  }
    drawSprites();
}
