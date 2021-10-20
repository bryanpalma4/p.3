var canvas,tom,tomImg1,tomImg2,tomImg3,jerry,jerryImg1,jerryImg2,jerryImg3,bg;


function preload() {
    //load the images here
bg = loadImage("images/garden.png");
tomImg1 = loadImage("images/cat1.png");
tomImg2 = loadImage("images/cat2.png","images/cat3.png");
tomImg3 = loadImage("images/cat4.png");
jerryImg1 = loadImage("images/mouse1.png");
jerryImg2 = loadImage("images/mouse2.png","images/mouse3.png");
jerryImg3 = loadImage("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom = createSprite(870,800);
   tom.addAnimation("tomDormindo",tomImg1);
   tom.scale = 0.2;

   jerry = createSprite(200,600);
   jerry.addAnimation("jerry",jerryImg1);
   tom.scale = 0.2;
}

function draw() {

    background (bg,);
    //Write condition here to evalute if tom and jerry collide
   if(tom.x - jerry.x < (tom.width - jerry.width) /2){
tom.velocityX = 0;
tom.addAnimation("tomFINAL",tomImg3);
tom.scale = 0.2;
tom.changeAnimation("tomFINAL");
   }
//faze jerry
if(jerry.x - tom.x < (jerry.width - tom.width) /2){
    jerry.velocityX = 0;
    jerry.addAnimation("jerryFINAL",jerry Img3);
    jerry.scale = 0.2;
    jerry.changeAnimation("jerryFINAL");
       }
    drawSprites();
}


function keyPressed(){
//keyCode == left arrow
//imagem2 do tom e do jerry 
  //For moving and changing animation write code here


}
