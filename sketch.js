var car,wall;
var speed,weight;



function setup() {

  createCanvas(1600,400);

  //random values to speed and weight
  speed=random(55,90);
  weight=random(400,1500);

  //car creating sprite ,color and velocity
  car=createSprite(500,200,50,50);
  car.shapeColor=color(225);
  car.velocityX=speed;

  //wall creating sprite and color
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);

}



function draw() {

  //light blue background
  background(10,200,200);  

  //collision 
  if (wall.x-car.x< (car.width+wall.width)/2){

    car.velocityX=0;
    var deformation=0.5 *weight *speed *speed/22509;

    if (deformation>180 ){
      //red car
      car.shapeColor=color(225,0,0);

      fill(0,225,225);
      text("Speed is:"+speed, 400,50);
      text("Weight is:"+weight, 400,150);
      text("Deformation is:"+deformation, 400,250);
      text("Deformation Rating = D",400,350)
    }

    if (deformation <180 && deformation > 100){
      //yellow car
      car.shapeColor=color(230,230,0);

      fill(0,0,225);
      text("Speed is:"+speed, 400,50);
      text("Weight is:"+weight, 400,150);
      text("Deformation is:"+deformation, 400,250);
      text("Deformation Rating = C",400,350)
    }

    if (deformation<100){
      //green car
      car.shapeColor=color(0,225,0);

      fill(0,0,225);
      text("Speed is:"+speed, 400,50);
      text("Weight is:"+weight, 400,150);
      text("Deformation is:"+deformation, 400,250);
      text("Deformation Rating = B",400,350)
    }
  }


  drawSprites();


}