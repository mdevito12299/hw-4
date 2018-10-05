function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

var offset= 0;

function draw() {
  background(255);

  for (var x = 10+offset; x < width-1; x = x + 10) {
    line(x, height/2, x+100, height/2-75);
  }
  offset = offset+1; 
if (offset>=10) {
  offset = 0 ;
}
}
