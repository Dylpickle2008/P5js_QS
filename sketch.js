//custom variables for y-coordinate of sun & horizon
let horizon = 500;
let sunHeight = 600;                         //initial sunheight
//variables for color change
let redVal = 0;
let greenVal = 0;
function setup() {
  createCanvas(1600, 900);
}


function draw() {
    background(redVal, greenVal, 0);
    //sun
    fill(255, 135, 5, 60);
    circle(300, sunHeight, 180);
    fill(255, 100, 0, 100);
    circle(300, sunHeight, 140);
  
  
    // with if-else statement
  if(sunHeight < horizon) {
    background("lightblue");               // blue sky if above horizon
  } else {
    background(0);                         // night sky otherwise
  }

  //sun
  fill("yellow");
  circle(750, sunHeight, 300);

  // draw line for horizon
  stroke("green");
  line(0,horizon,1600,horizon);

  //grass
  fill("green"); 
  rect(0, horizon, 1600, 500);
 
  //sun follows y-coordinate of mouse
  sunHeight = mouseY;

  //light blue background if sun is above horizon
  if(sunHeight > horizon){
  background("black");
  }
}









