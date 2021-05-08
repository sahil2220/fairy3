	var starImg,bgImg;
	var star, starBody;
	var fairy,fairyimg,fairyvoice

	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyimg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyvoice=loadSound("sound/joyMusic.mp3")
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy=createSprite(90,650);
	fairy.addAnimation("abc",fairyimg)
	fairy.scale=0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
    

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.x-fairy.x<=star.width/2+fairy.width/2){
  Matter.Body.setStatic(starBody,true)

  }



  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x=fairy.x-5
	}

	if (keyCode === RIGHT_ARROW) {
		fairy.x=fairy.x+5
	}
	
}
