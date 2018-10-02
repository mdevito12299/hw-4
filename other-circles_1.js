function setup() {
  createCanvas(400, 400);
}

var x = [40,50]; // new empty array
var y = [100,250]; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 10) {
    beginShape()
   vertex(x[i], y[i], 1 + (x.length - i));
  vertex(180,90);
    vertex(100,200);
    endShape(CLOSE);

  }

  x = x.slice(-50); // keep the last 50 x values
  y = y.slice(-50); // keep the last 50 y values
}
