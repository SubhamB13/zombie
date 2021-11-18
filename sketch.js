const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var Ground,Left_Base,Right_Base;
var bridge;
var Bridge_con;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  Ground = new Base(850,800,1750,20)
  Left_Base = new Base(50,300,100,100)
  Right_Base = new Base(1635,300,100,100)

  bridge = new Bridge(6,{x:245,y:35})
  Matter.Composite.add(bridge.body,Left_Base)
  Bridge_con = new link(bridge, Left_Base)
  

}

function draw() {
  background(51);
  Engine.update(engine);

  Ground.show()
  Left_Base.show()
  Right_Base.show()

}
