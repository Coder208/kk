const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var box2;
var box3;
var pig2;
var box4;
var log2;
var box5;
var slanting_log;
var slanting_log2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,350,50,50)
    box2 = new Box (900, 350, 50, 50)

    box3 = new Box (900, 250, 50, 50)
    box4 = new Box (700, 260, 50, 50)

    box5 = new Box (800, 220, 70, 70)

    pig1 = new Pig (800, 350)
    pig2 = new Pig (800, 240)
    
    log1 = new Log (800, 260, 300, PI/2)
    log2 = new Log (800, 220, 300, PI/2)
        
    //slanting_log = new Log (750, 200, 150, 10)
    //slanting_log2 = new Log (850, 200, 150, 10)
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    ground.display();

    pig1.display();
    pig2.display();

    log1.display();    
    log2.display();
    
    //slanting_log.display();
    //slanting_log2.display();
}