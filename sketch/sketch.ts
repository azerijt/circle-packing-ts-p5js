let colours = ["#052f5f","#005377","#06a77d","#d5c67a","#f1a208"]
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}


function draw() {
  background('white');

  const circlesArray = calculatePackedCircles(width, height);

  for (const c of circlesArray) {
    drawCircle(c);
  }
}

function drawCircle(c: Circle) {

  fill(random(colours));
  noStroke();
  circle(c.pos.x, c.pos.y, c.radius * 2);
}

// If user clicks, draw() will be called again (eventually)
function mousePressed() {
  redraw();
}
