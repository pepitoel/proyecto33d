const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState="onsling"



var datosDiego=[["Diego",14],["mi casa","la colonia"],[8,5,8,9]];
console.log(datosDiego[2][1]);

function preload() {
   // backgroundImg = loadImage("sprites/bg - fondo.png");
   getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    log6 = new Log(230,180,80, PI/2);
    slingShot = new SlingShot(bird.body,{x:200,y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingShot.display();    
}

function mouseDragged(){
    //if(gameState!=="launched"){
        Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
    //}
   
}

function mouseReleased(){
    slingShot.fly();
  //  gameState="launched"
}

function keyPressed(){
if(keyCode === 32){
    Matter.Body.setPosition(bird.body,{x:200,y:50});
   slingShot.attach(bird.body); 
   bird.trayectoria=[];
}    
}
async function getTime(){
var respons=await fetch("http://worldtimeapi.org/api/timezone/America/Denver");
var responsejson=await respons.json();
var datetime=responsejson.datetime; 
var hour=datetime.slice(11,13);
console.log(hour);
if (hour >=06 && hour<18){
bg="Sprites/bg - fondo.png"
}
else {
     bg="Sprites/noche.png";
     console.log(hour);
     }
      backgroundImg=loadImage(bg);


}  