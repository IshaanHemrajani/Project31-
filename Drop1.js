// JavaScript source code
class Drop extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,4,height,angle);
    this.image = loadImage("");
    Matter.Body.setAngle(this.body, angle);
}
}


	for (var i =0; i< maxDrops; i++) {
		drops.push(new createDrop(random(0,400),random(0,400)));

	}
	if(this.rain.position > height) {
	
	Matter.Body.setPosition	(this.rain, {x:random(0,400), y:random(0,400)})
	}