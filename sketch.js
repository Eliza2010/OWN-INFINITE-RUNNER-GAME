var ghostImg
var planet1, planet1Group, planet2Group, planet3Group, planet4Group
var planet2
var planet3 
var planet4
var planet5
var planetsGroup
var PLAY = 1;
var END = 0
var gameState = PLAY



function preload(){
 
    ghostImg = loadImage("images.png");
    skyImg = loadImage("skyImg.png")
    planet2Img =  loadImage("planet2.png")
    planet3Img =  loadImage("earth.png")
    planet4Img =  loadImage("mars.png")
    planet5Img =  loadImage("blue.png")
    gameOver = loadImage("game over.png");
     
}

function setup() {
    createCanvas(600,200)
    scene = createSprite(500,50,400,550);
    scene.addImage(skyImg)
    ghost = createSprite(100,50,30,30);
    ghost.addImage("ghost",ghostImg)
    ghost.scale=0.2  
    
    planet1Group = new Group()
    planet2Group = new Group()
    planet3Group = new Group()
    planet4Group = new Group()
    
      
  
    
   
  
     
   




}

function draw() {
    background(0)
if (gameState === PLAY) {
  scene.velocityX = -2
  if (scene.x < 0){
      scene.x = scene.width/2;
    }

    if(keyDown("up")){
      ghost.y = ghost.y - 3;
      }

      if (keyDown("down")) {
        ghost.y=ghost.y+3
      }


      
      var select_planet = Math.round(random(1,4))
      if (frameCount%60===0) {
          switch (select_planet) {
            case 1:planet1() 
              break;
              case 2:planet2() 
              break;
              case 3:planet3() 
              break;
              case 4:planet4() 
              break;
            default:
              break;
          }
    }



      if (planet1Group.isTouching(ghost)||planet2Group.isTouching(ghost)||planet3Group.isTouching(ghost)||planet4Group.isTouching(ghost)) {
        
        gameOver = createSprite(200,200.20,20)
      gameOver.addImage(gameOverImg)
      gameOver.scale = 0.5
      gameState = END
    }

  }
    if (gameState === END) {
      scene.velocityX = 0;
      planet1Group.destroyEach()
      planet2Group.destroyEach()
      planet3Group.destroyEach()
      planet4Group.destroyEach()

      
             
                  

      
    }

    


   
     
        


         
        

        
         
      
      drawSprites();
    
    }
      
     

      
      
      
     

    
  
        
      
      
    
     
    
        
        //planet1.velocityX = -2;
      //planet1.velocityX = -2
      //if (planet1.x < 0){
        //planet1.x = planet1.width/5;
       // }
       //planet2.velocityX = -2;
       //planet2.velocityX = -2
       //planet3.velocityX = -2;
       //planet3.velocityX = -2
       //planet4.velocityX = -2;
       //planet4.velocityX = -2
        
      
      

 




function  planet1() {
  var planet1 = createSprite(400,Math.round(random(20, 80)), 10, 10);
  planet1.addImage( planet2Img);
  planet1.velocityX = -2;
  planet1.lifetime = 200;
  planet1.scale = 0.1;
  planet1Group.add(planet1)
}
  function  planet2() {
    var planet2 = createSprite(400,Math.round(random(20, 80)), 10, 10);
    planet2.addImage( planet3Img);
    planet2.velocityX = -2;
    planet2.lifetime = 200;
    planet2.scale = 0.1;
    planet2Group.add(planet2)
  }

  function  planet3() {
    var planet3 = createSprite(400,Math.round(random(20, 80)), 10, 10);
    planet3.addImage( planet4Img);
    planet3.velocityX = -2;
    planet3.lifetime = 200;
    planet3.scale = 0.1;
    planet3Group.add(planet3)
  }
    function  planet4() {
      var planet4 = createSprite(400,Math.round(random(20, 80)), 10, 10);
      planet4.addImage( planet5Img);
      planet4.velocityX = -2;
      planet4.lifetime = 200;
      planet4.scale = 0.1;
      planet4Group.add(planet4)
    }

  











   
      
  