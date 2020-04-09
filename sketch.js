const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5, ground, pig1, log1, pig2, log2, pig3, log3, bird, log4, log5, tri;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
         

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

    box5 = new Box(810,160,70,70);

    tri = new Triangle(790,100, 950, 250, 665, 250);

}

function draw(){
    background(0);
    Engine.update(engine);

    Engine.update(engine);

    box1.display();
    box2.display();

    ground.display();

   box3.display();
    box4.display();
box5.display();

    tri.display();
    

  
}