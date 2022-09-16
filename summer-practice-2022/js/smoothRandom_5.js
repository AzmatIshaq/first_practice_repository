var x = [];

let randX = [];
let randY = [];

let easing = 0.01;

// Variable to style canvas
let canvasProperties = {
// Set canvas width and height
  w: 850,
  h: 550,
};

function setup() {
  // Setup Canvas
    let canvas = createCanvas(canvasProperties.w, canvasProperties.h);
    canvas.parent(`#p5-canvas`);


  // Set a new random position at an interval
  setInterval(randomTest, 3000);

    for (var i = 0; i < 30; i++) {
  x[i] = random(-1000, 200);
  }

noStroke();

fill(255, 200);


}

function draw() {

background(0);

for (var i = 0; i < x.length; i++) {
  // x[i] += 0.5;

  let targetX = x[i];
  let dx = targetX - x[i];
  x[i] += dx * easing;

//   let targetY = randY;
//   let dy = targetY - y;
//   y += dy * easing;


  var y = i * 40;

//   noStroke();

// fill(255, 200);
  ellipse(x[i], y, 12);
  }
}


function randomTest() {
    for (var i = 0; i < 30; i++) {
  x[i] = random(0, width);
  }

    // x[i] = random(-1000, 200);
  // randX = random(0, width);
  // randY = random(0, height);
  // console.log((randX + randY) / 2);
}
