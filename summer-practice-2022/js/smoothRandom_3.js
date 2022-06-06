/**
Project title
Author

Project description
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

let x = 100;
let y = 100;
let easing = 0.01;

let xc;
let yc;

// Variable to set starting state to `title`

let state = `animation`;

let randX = 100;
let randY = 100;

let circleArray = [];

let randArrayX = [];
let randArrayY = [];

let randArray1 = [];

/*********************** PRELOAD **********************************************/
function preload() {
}

/*********************** SETUP ************************************************/

/**
Set up ellipses and timer interval for random positions
*/
function setup() {

  let canvas = createCanvas(canvasProperties.w, canvasProperties.h);
  canvas.parent(`#p5-canvas`);

// Set a new random position at an interval
  setInterval(randomTest, 3000);



  for(let i = 0; i < 30; i++) {
    randArray1[i];
    console.log(randArray1[i]);
    // console.log(randArray[4]);
  }

randomArray();

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

/* - - - - - - - - - - - STATES - - - - - - - - - - - - - - - - - - - - - - - */

/*********************** ANIMATION STATE **************************************/

function animationState() {


// Set a y position target and move towards it
  let targetX = randX;
  let dx = targetX - x;
  x += dx * easing;

// set an x position target and move towards it
  let targetY = randY;
  let dy = targetY - y;
  y += dy * easing;


  // xc = constrain(x, width, height);
  // yc = constrain(y, width, height);


    for (let i = 0; i < 10; i++) {
      push();
      noStroke();
      ellipse(x, y * i, 66 + x / 14, 66 + y / 14);
      pop();
    }


    for (let i = 0; i < 10; i++) {
      push();
      noStroke();
      ellipse(x * i, y, 66, 66);
      pop();
    }

}

/*********************** TITLE STATE ******************************************/

function titleState() {

}

/*********************** Misc Functions *****************************************/

function randomTest() {
  randX = random(0, width);
  randY = random(0, height);
  console.log((randX + randY) / 2);

}

function randomArray() {

for (let i = 0; i < 30; i++) {
  randArray1[i] = function() {
    randX = random(0, width);
    randY = random(0, height);
  }
}
  console.log((randX + randY) / 2);
  console.log(randArray1[0]);

}
