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

let easing = 0.06;
let randomInterval = 3000;

// Slider to affect easing
let slider;

let mouseEffect = false;

let simulationActive = true;

let pauseActive = false;

function setup() {

// Setup Canvas
  let canvas = createCanvas(canvasProperties.w, canvasProperties.h);
  canvas.parent(`#p5-canvas`);


  // Set a new random position at an interval
  setInterval(randomTest, randomInterval);

  for (var i = 0; i < 70; i++) {

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

// easing = 0.001;

    // easing = mouseX / 10000;
// randomInterval = mouseX;

if (simulationActive) {

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
    ellipse(x[i], y[i], 30);
    }
  }
    // Link easing effect with mouse movement
    if (mouseEffect) {
        easing = mouseX / 10000;

      }
    if (!mouseEffect) {
        easing = slider.value();
    }

    if (pauseActive) {
      easing = 0;
    }

    if (!pauseActive && !mouseEffect) {
      easing = slider.value();
    }

  }

function randomTest() {
  // Try logging x.length? Does it still work since x is an array now?
    for (var i = 0; i < x.length; i++) {

  randX[i] = random(0, width);
  randY[i] = random(0, height);
  }

  // console.log((randX + randY) / 2);
}



// Jquery buttons

// Trigger mouse effect based on button click
$("#mouse-effect").click(function(){
    if (!mouseEffect) {
    mouseEffect = true;
  } else if (mouseEffect) {
    mouseEffect = false;
  }
});

// Toggle simulation on and off

$("#toggle-simulation").click(function(){
  if(simulationActive) {
  simulationActive = false;
} else if (!simulationActive) {
  simulationActive = true;
}
  });


// Pause the animation effects

$("#pause-effect").click(function(){
  if(pauseActive) {
  pauseActive = false;

} else if (!pauseActive) {
  pauseActive = true;
}
  });
