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

let x = 1;
let y = 1;
let easing = 0.01;

// Variable to set starting state to `title`

let state = `animation`;

let randX = 10;
let randY = 10;

let circleArray = [];

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

  setInterval(randomTest, 3000);


 ellipse(x, y, 66, 66);
  
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

  let targetX = randX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = randY;
  let dy = targetY - y;
  y += dy * easing;

  push();
  noStroke();
  ellipse(x, y, 66, 66);
  pop();

  // for (let i = 0; i < circleArray.length; i++) {
  //     circleArray[i];
  // }
}

/*********************** TITLE STATE ******************************************/

function titleState() {

}

/*********************** RESET STATES *****************************************/

function resetStates() {

}


function randomTest() {
  randX = random(0, width);
  randY = random(0, height);
  console.log((randX + randY) / 2);

}
