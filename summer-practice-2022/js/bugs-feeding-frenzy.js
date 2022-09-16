/**
Project title
Author

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Variable to style canvas
let canvasProperties = {
  // Set canvas width and height
  w: 850,
  h: 550,
};

let x = [];
let y = [];

let randX = [];
let randY = [];

let easing = 0.019;
let randomInterval = 100;

// Slider to affect easing
let slider;

let simulationActive = true;

let pauseActive = false;

let square = {
  x: 850 / 2,
  y: 550 / 2,
  w: 100,
  h: 100,
  fill: {
    r: 20,
    g: 190,
    b: 180
  },
}

let bugs = {
  size: 15,
  amount: 2
}

let foodEaten = false;

let d;

function setup() {

  // Setup Canvas
  let canvas = createCanvas(canvasProperties.w, canvasProperties.h);
  canvas.parent(`#p5-canvas`);


  // Set a new random position at an interval
  setInterval(randomTest, randomInterval);

  for (var i = 0; i < bugs.amount; i++) {

    randX[i] = random(0, width);
    randY[i] = random(0, width);
    x[i] = random(0, width);
    y[i] = random(0, height);

  }

  // Create slider

  slider = createSlider(-0.001, 0.15, 0.019, 0.005);
  // Put slider within the canvas's parent html id block
  slider.parent(`#p5-canvas`);
}

function draw() {

  background(0);

  // Run simulation only when user makes it active.
  if (simulationActive) {

    if (square.w <= 0) {
      let foodReset = function() {
        square.w = 100;
        square.h = 100;
        foodEaten = false;
      };
      setTimeout(foodReset, 3000);
    }

    // Bugs feeding animation function
    feedingAnimation();

    for (var i = 0; i < x.length; i++) {

      let targetX = randX[i];
      let dx = targetX - x[i];
      x[i] += dx * easing;

      let targetY = randY[i];
      let dy = targetY - y[i];
      y[i] += dy * easing;

      // var y = i * 0.4;

      //   noStroke();
      // fill(255, 200);
      ellipse(x[i], y[i], bugs.size);

      d = dist(x[i], y[i], square.x, square.y);
    }
  }


  if (pauseActive) {
    easing = 0;
  }

  if (!pauseActive) {

    easing = 0.019;

    if (d < bugs.size) {
      square.w -= 0.9;
      square.h -= 0.9;
      square.fill.r = 250;

      bugs.size++


    } else {
      square.fill.r = 20;
    }

    if (square.w < 0) {
      square.w = 0;
      square.h = 0;

      foodEaten = true;
    }

    if (foodEaten === true && bugs.size > 30) {
      bugs.size -= 2;
    }

    if (foodEaten === true) {
      easing = -0.03;
    } else if (foodEaten === true && x[69] > -1000) {
      easing = 0;
    }
  }

} // End of draw

function feedingAnimation() {

  push();
  fill(square.fill.r, square.fill.g, square.fill.b);
  rectMode(CENTER);
  rect(square.x, square.y, square.w, square.h);
  pop();
}

function randomTest() {
  // Try logging x.length? Does it still work since x is an array now?
  for (var i = 0; i < x.length; i++) {

    randX[i] = random(0, width);
    randY[i] = random(0, height);
  }

  // console.log((randX + randY) / 2);
}

// Toggle simulation on and off

$("#toggle-simulation").click(function() {
  if (simulationActive) {
    simulationActive = false;
  } else if (!simulationActive) {
    simulationActive = true;
  }
});


// Pause the animation effects

$("#pause-effect").click(function() {
  if (pauseActive) {
    pauseActive = false;

  } else if (!pauseActive) {
    pauseActive = true;
  }
});


// Add more food button effect
$("#add-food").click(function() {
  square.w = 100;
  square.h = 100;
  foodEaten = false;
});


function keyPressed() {
  console.log(foodEaten);
  console.log(x[69]);
}
