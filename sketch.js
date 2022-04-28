var path, boy;
var leftBoundary, rightBoundary;
var pathImg, boyImg;

function preload() {
  pathImg = loadImage('path.png');
  boyImg = loadAnimation('Runner-1.png', 'Runner-2.png');
}

function setup() {
  createCanvas(400, 400);
 
  // Movendo o fundo
  path = createSprite(200, 400);
  path.addImage('imgpath', pathImg);

  //Criando menino que corre
  boy = createSprite(200, 200);
  boy.addAnimation('meninocorrendo', boyImg);
  boy.scale = 0.08;
  
  // Criando Boundary (Limite) esquerdo
  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  //Crie Boundary direito
  rightBoundary = createSprite(400, 0, 100, 800);
  rightBoundary.visible = false;
}

function draw() {
   
  background(0);
  // Menino se movendo no eixo X com o mouse
  boy.x = mouseX;

  edges= createEdgeSprites()
  boy.collide(edges[3])
  
  path.velocityY = 4;

  boy.collide(rightBoundary)
  boy.collide(leftBoundary)
 
 
   
    
  //Reiniciar o fundo
  if (path.y > 400) {
    path.y = path.width;
 }
 drawSprites();
}
