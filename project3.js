function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  if (mouseIsPressed === true) {
    fill("blue");
  } else {
    fill("red");
  }
  noStroke(0);
  circle(mouseX, mouseY, 30)
  
}

function mousePressed(){
  background('black') 
  
}