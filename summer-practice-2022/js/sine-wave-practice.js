/**
Project title
Author

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/* - - - - - - - - - - - VARIABLES - - - - - - - - - - - - - - - - - - - - -  */

// Variable to style canvas
let canvasProperties = {
// Set canvas width and height
  w: 850,
  h: 550,
};

// Variable to style the background

let bg = {
  r: 0,
  g: 0,
  b: 0,
};

// Variable to set starting state to `title`

let state = `animation`;

let circleAngleIncrease = 0.01;

let circleAngle = 1;

let circleSize = 40;


/*********************** PRELOAD **********************************************/

/**
Description of preload
*/
function preload() {

}


/*********************** SETUP ************************************************/

/**
Description of setup
*/
function setup() {

  let canvas = createCanvas(canvasProperties.w, canvasProperties.h);
  canvas.parent(`#p5-canvas`);

  noCursor();

}


/*********************** DRAW *************************************************/


/**
Description of draw
*/
function draw() {
  background(bg.r, bg.g, bg.b);

    // Alternate between game states
  if (state === `title`) {
    titleState();
  }
  if (state === `animation`) {
    animationState();
  }

} // End of draw()

/* - - - - - - - - - - - USER INTERACTION - - - - - - - - - - - - - - - - - - */

/*********************** KEY PRESSED ******************************************/

// function keyPressed() {
// }

/*********************** MOUSE PRESSED ****************************************/

// function mousePressed() {
// }

/* - - - - - - - - - - - STATES - - - - - - - - - - - - - - - - - - - - - - - */

/*********************** ANIMATION STATE **************************************/

function animationState() {

  fill(30, 120, 120);

  ellipse(width / 2, height / 2, circleSize);

  circleAngle += circleAngleIncrease;

  circleSize = abs(sin(circleAngle)) * 100;
}

/*********************** TITLE STATE ******************************************/

function titleState() {

}

/*********************** RESET STATES *****************************************/

function resetStates() {

}
