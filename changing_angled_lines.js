function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

var endpointX=100;
var changeInX= -1;

function draw() {
  background(255);

  for (var x = 10; x < width-1; x = x + 10) {
    line(x, height/2, x+endpointX, height/2-75);
  }
 endpointX = endpointX +changeInX;
  if (endpointX <-100) {
    changeInX = 1;
  }
  if (endpointX > 100) {
    changeInX = -1; 
  }
    
    
}
