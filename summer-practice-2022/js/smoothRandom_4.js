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

let easing = 0.01;

function setup() {

// Setup Canvas
  let canvas = createCanvas(canvasProperties.w, canvasProperties.h);
  canvas.parent(`#p5-canvas`);

  // Set a new random position at an interval
  setInterval(randomTest, 2000);


  for (var i = 0; i < 70; i++) {

  randX[i] = random(0, width);
  randY[i] = random(0, width);
  x[i] = random(0, width);
  y[i] = random(0, height);

  }



}

function draw() {

background(0);


for (var i = 0; i < x.length; i++) {
  // x[i] += 0.5;

    let targetX = randX[i];
    let dx = targetX - x[i];
    x[i] += dx * easing;

    let targetY = randY[i];
    let dy = targetY - y[i];
    y[i] += dy * easing;


    // var y = i * 0.4;

  //   noStroke();

  // fill(255, 200);
    ellipse(x[i], y[i], 10);
    }
  }


function randomTest() {
    for (var i = 0; i < x.length; i++) {

  randX[i] = random(0, width);
  randY[i] = random(0, height);
  }

    // x[i] = random(-1000, 200);
  // randX = random(0, width);
  // randY = random(0, height);
  // console.log((randX + randY) / 2);
}
