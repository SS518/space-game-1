var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var c1,c2,c3,c4;
var ground , track1,track2;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload (){
   c1 = loadImage("images/rocket(1).jpg")
   c2 = loadImage("images/rocket(1).jpg")
   c3 = loadImage("images/rocket(1).jpg")
   c4 = loadImage("images/rocket(1).jpg")

   ground = loadImage("images/background.jpg")
   track1 = loadImage("images/background.jpg")
 //  track2 = loadImage("images/background.png")

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

 // c1 = resize(15)
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
     game.end()
  }
}
