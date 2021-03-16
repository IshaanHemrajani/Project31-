
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Drop

function draw(){
    background(backgroundImg);
    Engine.update(engine);
 
}

function preload(){
    backgroundImg = loadImage("");
}

function setup(){
   Drop = new Drop(200,110,60, PI/2);
    
}

function draw(){
	background(backgroundImg);
    Engine.update(engine);
    Drop.display();
}   

