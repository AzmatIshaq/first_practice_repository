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

let x1 = 800;
let y1 = 500;

// Variable to set starting state to `title`

let state = `animation`;

let randX = 10;
let randY = 10;

let randX1 = 10;
let randY1 = 10;

// let circleArray = [];
//
// let randArrayX = [];
// let randArrayY = [];

// let randArray1 = [`G`, `A`];

let randArray1 = [];

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

// Set a new random position at an interval
  setInterval(randomTest, 3000);



  for(let i = 0; i < 30; i++) {
    randArray1[i] = random(0, width);
    console.log(randArray1[i]);
    // console.log(randArray[4]);
  }

  // for(let i = 0; i < 30; i++) {
  //   randArray1[i];
  //   console.log(randArray1[i]);
  //   // console.log(randArray[4]);
  // }

randomArray();



  // setInterval(randomArray, 2000);

  // for (let i = 0; i < 10;  i++) {
  //   // let circleRandX = random(0, width);
  //   // let circleRandY= random(0, height);
  //
  //   x = 100 + 20 * i;
  //   y = 100 + 20 * i;
  //
  //   circleArray[i] = ellipse(x, y, 66, 66);
  //
  //   randArrayX[i];
  //   randArrayY[i];
  // }
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


// Second ellipse

  let targetX1 = randX1;
  let dx1 = targetX1 - x1;
  x1 += dx1 * easing;

  let targetY1 = randY1;
  let dy1 = targetY1 - y1;
  y1 += dy1 * easing;

  //
  // push();
  // noStroke();
  // ellipse(x, y, 66, 66);
  // pop();
  //
  // push();
  // noStroke();
  // ellipse(x + 20, y + 20, 66, 66);
  // pop();

 // circleArray[i];


    push();
    noStroke();
    ellipse(x, y, 66, 66);
    pop();

    push();
    noStroke();
    ellipse(x1, y1, 66, 66);
    pop();

// p5 animation with nested for loop
  for (let y1 = 20; y1 <= 100 - 20; y1 += 10) {
    for (let x1 = 20; x1 <= 100 - 20; x1 += 10) {
      stroke(102);
      fill(255);
      ellipse(x1, y1, 4, 4);
      // Draw a line to the center of the display
      line(x1, y1, width / 2, height / 2);
    }
  }


  // for (let i = 0; i < randArrayY.length; i++) {
  //
  //   push();
  //   noStroke();
  //   ellipse(x + 100 * randArrayX[i], x + 100 * randArrayY[i], 66, 66);
  //   pop();
  //
  //
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
  randX1 = random(0, width);
  randY1 = random(0, height);
  console.log((randX + randY) / 2);
}

function randomArray() {

for (let i = 0; i < 30; i++) {
  randArray1[i] = function() {
    randX = random(0, width);
    randY = random(0, height);
  }
}

  randX = random(0, width);
  randY = random(0, height);

  console.log((randX + randY) / 2);
  console.log(randArray1[0]);

}
