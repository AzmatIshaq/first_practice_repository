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

let state = `title`;

let textFontSize = 0;

// Easing effect with no if statement
// Rate at which the size will incrase
let easing;
// Desired target size
let target;
// Math to make the effect happen
let textAnim;

let textContent;

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

    // to switch states

    if (state === `title` && keyCode === 13) {
      state = `animation`;
    }

  }
  if (state === `animation`) {
    animationState();
  }

} // End of draw()

/* - - - - - - - - - - - USER INTERACTION - - - - - - - - - - - - - - - - - - */

/*********************** KEY PRESSED ******************************************/

function keyPressed() {

}

/*********************** MOUSE PRESSED ****************************************/

// function mousePressed() {
// }

/* - - - - - - - - - - - STATES - - - - - - - - - - - - - - - - - - - - - - - */

/*********************** ANIMATION STATE **************************************/

function animationState() {

  // Try mapping x and y to mouse

  let x1 = map(mouseX, 0, width, 0, height);
  let y1 = map(mouseY, 0, width, 0, height);
  ellipse(x1, y1, 25, 25);

// p5 animation with nested for loop
  for (let y = 20; y <= height - 20; y += 10) {
    for (let x = 20; x <= width - 20; x += 10) {
      stroke(102);
      fill(255);
      ellipse(x, y, 4, 4);
      // Draw a line to the center of the display
      line(x, y, width / 2, height / 2);
    }
  }

}

/*********************** TITLE STATE ******************************************/

function titleState() {


    if (textFontSize > 60) {
      easing = 0.08;
      textContent = `Press enter`;
      // Desired target size
      target = 100;
      // Math to make the effect happen
      textAnim = target - textFontSize;
      textFontSize += textAnim * easing;
    } else {
      // Easing effect with no if statement
        // Rate at which the size will incrase
        easing = 0.01;
        // Desired target size
        target = 100;
        // Math to make the effect happen
        textAnim = target - textFontSize;
        textFontSize += textAnim * easing;
        textContent = `hello`;
    }

    push();
    fill(65, 154, 194);
    textSize(textFontSize);
    text(textContent, width / 2, height / 2);
    pop();


}

/*********************** RESET STATES *****************************************/

function resetStates() {

}
