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

}

/*********************** TITLE STATE ******************************************/

function titleState() {


    if (textFontSize > 60 && mouseX > 180 && mouseX < 260 && mouseY > 180 && mouseY < 260) {
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
