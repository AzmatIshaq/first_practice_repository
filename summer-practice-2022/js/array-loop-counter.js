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

// Variable to set starting state
let state = `animation`;

let pracArray = [];

let pracArray2 = [`A`, `B`];

let pracArray3 = [];




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

  for(let i = 0; i < 21; i++) {

    pracArray[i] = function() {
      push();
      fill(255);
      text(`hello`, 20, 20, 20 ,20);
      pop();
    }

    // pracArray = [i];

    console.log(pracArray);

    // console.log(pracArray[i]);
    // ^ why is that 0?
  }

  console.log(pracArray);

  pracArray3[0] = function() {
    push();
    fill(65, 154, 194);
    textSize(200);
    text(`hello`, 500, 100);
    pop();
  }


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

function keyPressed() {
  if (keyCode === 13) {
      console.log(pracArray);
      console.log(pracArray2);
      console.log(pracArray3[0]);
  }
}

/*********************** MOUSE PRESSED ****************************************/

// function mousePressed() {
// }

/* - - - - - - - - - - - STATES - - - - - - - - - - - - - - - - - - - - - - - */

/*********************** ANIMATION STATE **************************************/

function animationState() {
  // push();
  // fill(255);
  // text(`hello`, 20, 20, 20 ,20);
  // pop();

  for(let i = 0; i < 21; i ++) {
    push();
    fill(255);
    text(`hello`, 30 * i + 12, 30 * i + 12, 20 ,20);
    pop();

    // console.log(pracArray.length);
  }


  // push();
  // fill(65, 154, 194);
  // textSize(200);
  // text(`hello`, 500, 100);
  // pop();

  pracArray3[0]

}

/*********************** TITLE STATE ******************************************/

function titleState() {

}

/*********************** RESET STATES *****************************************/

function resetStates() {

}
