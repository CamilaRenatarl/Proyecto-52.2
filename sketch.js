var fondo, fondoImg;
var nova, novaImg,nova2;
var balas=60;
var gema1,gema1Img;
var gema2,gema2Img;
var gema3,gema3Img;
var gema4,gema4Img;
var gema5,gema5Img;
var nave, naveImg;
var nave1,nave1Img;
var nave2,nave2Img;
var nave3,nave3Img;
var nave4,nave4Img;

var gameOverImg,gameOver;
var winImg,win

var GemCount=0;
//ESTADOS DE JUEGO
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  
  fondoImg=loadImage("IMAGENES/fondo.png");
  novaImg=loadImage("IMAGENES/Nova1.png");
  nova2=loadImage("IMAGENES/Nova2.png");
  gema1Img=loadImage("IMAGENES/Gema1.png");
  gema2Img=loadImage("IMAGENES/Gema2.png");
  gema3Img=loadImage("IMAGENES/Gema3.png")
  gema4Img=loadImage("IMAGENES/Gema4.png");
  gema5Img=loadImage("IMAGENES/Gema5.png");
  naveImg=loadImage("IMAGENES/Nave1.png");
  nave1Img=loadImage("IMAGENES/Nave1.png");
  nave2Img=loadImage("IMAGENES/Nave1.png");
  nave3Img=loadImage("IMAGENES/Nave1.png");
  nave4Img=loadImage("IMAGENES/Nave1.png");
  
gameOverImg = loadImage("IMAGENES/gameOver.png");
winImg=loadImage("IMAGENES/ganaste.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //Añadir la imagen de fondo
  fondo = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  fondo.addImage(fondoImg);
  //Crear a Nova
  nova=createSprite(displayWidth-1350,displayHeight-300,50,50);
  nova.addImage(novaImg);
  nova.scale=0.4;
  //Crear las gemas
  gema1=createSprite(displayWidth-250,350,50,50);
  gema1.addImage(gema1Img);
  gema1.scale=0.5;
  gema2=createSprite(displayWidth-400,400,50,50);
  gema2.addImage(gema2Img);
  gema2.scale=0.5;
  gema3=createSprite(displayWidth-450,200,50,50);
  gema3.addImage(gema3Img);
  gema3.scale=0.5;
  gema4=createSprite(displayWidth-350,300,50,50);
  gema4.addImage(gema4Img);
  gema4.scale=0.5;
  gema5=createSprite(displayWidth-300,150,50,50);
  gema5.addImage(gema5Img);
  gema5.scale=0.5;
//Crear las naves
nave=createSprite(displayWidth-600,150,50,50)
nave.addImage(naveImg);
nave.scale=0.4;


nave1=createSprite(displayWidth-650,300,50,50)
nave1.addImage(nave1Img);
nave1.scale=0.4;

nave2=createSprite(displayWidth-550,550,50,50)
nave2.addImage(nave2Img);
nave2.scale=0.4;

nave3=createSprite(displayWidth-400,600,50,50)
nave3.addImage(nave3Img);
nave3.scale=0.4;

nave4=createSprite(displayWidth-650,450,50,50)
nave4.addImage(nave4Img);
nave4.scale=0.4;

gameOver = createSprite(700,300);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false; 

win = createSprite(700,300);
win.addImage(winImg);
win.scale = 0.8;
win.visible = false; 

}

function draw() {
  
  //ESTADO PLAY
  if(gameState===PLAY){
    //NAVES SE MUEVEN
        if(keyDown("ENTER")){
          nave.velocityX=-3
          nave.lifetime=250
         nave1.velocityX=-2
         nave1.lifetime=250
          nave2.velocityX=-3
          nave2.lifetime=250
          nave3.velocityX=-2
          nave3.lifetime=250
          nave4.velocityX=-3
          nave4.lifetime=250
          nova.addImage(nova2)
      
        }
        
        //MOVIMIENTOS DE NOVA
        if(keyDown("UP_ARROW")){
          nova.y=nova.y-5
          
        }
        if(keyDown("DOWN_ARROW")){
          nova.y=nova.y+5
          
        }
        if(keyDown("RIGHT_ARROW")){
          nova.x=nova.x+5
        }
        if(keyDown("LEFT_ARROW")){
          nova.x=nova.x-5
        }
    
               //SUMAR PUNTOS
          if (nova.isTouching(gema1)) {
            gema1.destroy();
            GemCount=GemCount+1;
          }
          if (nova.isTouching(gema2)) {
            gema2.destroy();
            GemCount=GemCount+1;
          }
          if (nova.isTouching(gema3)) {
            gema3.destroy();
            GemCount=GemCount+1;
          }
          if (nova.isTouching(gema4)) {
            gema4.destroy();
            GemCount=GemCount+1;
          }
          if (nova.isTouching(gema5)) {
            gema5.destroy();
            GemCount=GemCount+1;
          }
    
      }
      ////ESTADO END
      //GAME OVER
      if(nave.isTouching(nova)){
        gameState=END;
        gameOver.visible = true;
        nave.velocityX=0
        nave1.velocityX=0
        nave2.velocityX=0
        nave3.velocityX=0
        nave4.velocityX=0
      }
      if(nave1.isTouching(nova)){
        gameState=END;
        gameOver.visible = true;
        nave1.velocityX=0
        nave.velocityX=0
        nave2.velocityX=0
        nave3.velocityX=0
        nave4.velocityX=0
      }
      if(nave2.isTouching(nova)){
        gameState=END;
        gameOver.visible = true;
        nave2.velocityX=0
        nave3.velocityX=0
        nave.velocityX=0
        nave4.velocityX=0
        nave1.velocityX=0
      }
      if(nave3.isTouching(nova)){
        gameState=END;
        gameOver.visible = true;
        nave3.velocityX=0
        nave.velocityX=0
        nave2.velocityX=0
        nave4.velocityX=0
        nave1.velocityX=0
      }
      if(nave4.isTouching(nova)){
        gameState=END;
        gameOver.visible = true;
        nave4.velocityX=0
        nave3.velocityX=0
        nave2.velocityX=0
        nave1.velocityX=0
        nave.velocityX=0
      }
      // WIN!!!!!
      if(GemCount===5){
        gameState=END;
        win.visible = true;
        win.scale=0.7
        nave4.velocityX=0
        nave3.velocityX=0
        nave2.velocityX=0
        nave1.velocityX=0
        nave.velocityX=0
      }
      
     
    drawSprites();
    textSize(30);
      fill(300);
      text("GemCount: "+ GemCount,100,70);



 
 


}



