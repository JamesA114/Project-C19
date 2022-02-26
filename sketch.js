var spaceship, spaceShipIMG
var backgroundImage
var laser, laserIMG, laserG

var alien1G,alien2G,alien3G,alien4G,alien5G,alienIMG
var alien1,alien2,alien3,alien4,alien5

var planet, planetIMG

var timerThing

var score = 0
var highscore = 0
var gamestate = "play"

var endobject
var gameOver, gameOverIMG

function preload(){
backgroundImage = loadImage("spaceBackground.jpg");
spaceShipIMG = loadImage("spaceship.png");
laserIMG = loadImage("laser.jpg")
alienIMG = loadImage("spaceinvaderpng.png")
planetIMG = loadImage("planet.png")
gameOverIMG = loadImage("gameOver.png")
}

function setup() {
 createCanvas(400,600)
planet = createSprite(200,800)
planet.scale = 0.5
planet.addImage(planetIMG)
planet.velocityY = 0.8

timerThing = createSprite(0,-30,20,20)
timerThing.velocityX = 3

endobject = createSprite(200,650,500,50)

gameOver = createSprite(200,300)
gameOver.addImage(gameOverIMG)
gameOver.scale = 0.7
gameOver.visible = false

 spaceship = createSprite(200,550,20,20)
 spaceship.addImage(spaceShipIMG)
 spaceship.scale = 0.15

alien1G = new Group();
alien2G = new Group();
alien3G = new Group();
alien4G = new Group();
alien5G = new Group();
laserG = new Group();
}

function draw() {
background(backgroundImage);

fill("yellow")
text("Score:" + score, 320, 20)
text("High Score:" + (highscore), 300, 40)
text("up arrow to shoot", 5, 15)
text("down arrow to reset", 5, 30)
text("left and right arrow to move", 5, 45)


if(gamestate == "play"){
    if(keyDown("left_arrow") && spaceship.x > 50){
        spaceship.x = spaceship.x - 6
    }
    if(keyDown("right_arrow") && spaceship.x < 350){
        spaceship.x = spaceship.x + 6
    }
    if(keyDown("up_arrow") && timerThing.x > 50){
        shootLaser()
        timerThing.x = 0
    }
    
    if(laserG.isTouching(alien1G)){
        alien1G.destroyEach();
        score = score + 1
    }
    
    if(laserG.isTouching(alien2G)){
        alien2G.destroyEach();
        score = score + 1
    }
    if(laserG.isTouching(alien3G)){
        alien3G.destroyEach();
        score = score + 1
    }
    if(laserG.isTouching(alien4G)){
        alien4G.destroyEach();
        score = score + 1
    }
    if(laserG.isTouching(alien5G)){
        alien5G.destroyEach();
        score = score + 1
    }
    
    if(endobject.isTouching(alien1G)){
        gamestate = "end"
        }
    
    if(endobject.isTouching(alien2G)){
        gamestate = "end"
    }
    if(endobject.isTouching(alien3G)){
        gamestate = "end"
    }
    if(endobject.isTouching(alien4G)){
        gamestate = "end"
    }
    if(endobject.isTouching(alien5G)){
        alien5G.destroyEach();
        gamestate = "end"
    }
    if(score >= highscore){
        highscore=score
    }
    
    spawnAlien1();    
    spawnAlien2();
    spawnAlien3();
    spawnAlien4();
}
if(gamestate == "end"){
    planet.velocityY = 0
    laserG.setVelocityYEach(0)
    gameOver.visible = true
if(keyDown("DOWN_ARROW"))
    reset();
}

drawSprites();
}

function shootLaser(){
laser = createSprite(spaceship.x,500,20,20)
laser.addImage(laserIMG)
laser.scale = 0.1
laser.velocityY = -10
laser.lifetime = 50
laserG.add(laser)
}

function spawnAlien1(){
if(frameCount % 75 === 0){
    alien1 = createSprite(Math.round(random(75,325)),0,20,20)
    alien1.addImage(alienIMG)
    alien1.scale = 0.03
    alien1.velocityY = 6
    alien1G.add(alien1);
}
if(gamestate == "end"){
    alien1.velocityY = 0
}
}
function spawnAlien2(){
    if(frameCount % 96 === 0){
        alien2 = createSprite(Math.round(random(75,325)),0,20,20)
        alien2.addImage(alienIMG)
        alien2.scale = 0.03
        alien2.velocityY = 6
        alien2G.add(alien2);
    }
    if(gamestate == "end"){
        alien2.velocityY = 0
    }
}
function spawnAlien3(){
    if(frameCount % 117 === 0){
        alien3 = createSprite(Math.round(random(75,325)),0,20,20)
        alien3.addImage(alienIMG)
        alien3.scale = 0.03
        alien3.velocityY = 6
        alien3G.add(alien3);
    }
    if(gamestate == "end"){
        alien3.velocityY = 0
    }
}
function spawnAlien4(){
    if(frameCount % 138 === 0){
        alien4 = createSprite(Math.round(random(75,325)),0,20,20)
        alien4.addImage(alienIMG)
        alien4.scale = 0.03
        alien4.velocityY = 6
        alien4G.add(alien4);
    }
    if(gamestate == "end"){
        alien4.velocityY = 0
    }
}

function spawnAlien5(){
    if(frameCount % 159 === 0){
        alien5 = createSprite(Math.round(random(75,325)),0,20,20)
        alien5.addImage(alienIMG)
        alien5.scale = 0.03
        alien5.velocityY = 6
        alien4G.add(alien5);
    }
    if(gamestate == "end"){
        alien5.velocityY = 0
    }
}
function reset(){
    highscore = highscore
    score = 0
    gamestate = "play"
    planet.x = 200
    planet.y = 800
    planet.velocityY = 0.8
    alien1G.destroyEach();
    alien2G.destroyEach();
    alien3G.destroyEach();
    alien4G.destroyEach();
    alien5G.destroyEach();
    gameOver.visible = false
}