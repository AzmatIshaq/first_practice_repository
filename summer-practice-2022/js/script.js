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

// Test class
let testClass;

let x = 1;
let y = 1;
let easing = 0.05;

let rand1;
let rand2;


let testBool = false;



let caterpillar = {
  x: 0,
  y: 250,
  totalSegments: 100, // ONE HUNDRED SEGMENTS!!!
  segmentSize: 26,
  segmentSpacing: 55
}

// Mouse track

let num = 60;
let x1 = [];
let y1 = [];



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

testClass =  new ClassOne();

for ( let i = 0; i < num; i++) {
    x1[i] = 0;
    y1[i] = 0;
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

  for (let i = 0; i < caterpillar.totalSegments; i++) {
  ellipse(mouseX + i * caterpillar.segmentSpacing, mouseY, caterpillar.segmentSize);
  }

  x += 10;
  y += 10;

  if (x > 50) {
    x -= 20;
    y -= 20;
  }

  if (x < 0) {
    x += 20;
    y += 20;
  }
  ellipse(x + 10, y + 10, 66, 66);



  for(let f = 0; f < 10; f++) {
    push();
    ellipse(x + 10, y + 10, 66 + f, 66 + f);
    pop();
  }


  // Time the light dimming event
  let delayTime = function() {
    testBool = true;
    fill(233,22,222, 80);

  };

  // Time the light dimming event
  let delayTime2 = function() {
    testBool = false;
    fill(23,222,22);
    ellipse(x + 10, y + 10, 66, 66);
  };

  if (testBool === false) {
    setTimeout(delayTime, 2000);
  } else {
      setTimeout(delayTime2, 2000);
      }



// Track mouse
for (let i = num-1; i > 0; i--) {
  x1[i] = x1[i-1];
  y1[i] = y1[i-1];
}

x1[0] = mouseX;
y1[0]= mouseY;

for (let i = 0; i < num; i++) {
  fill(i * 4);
  ellipse(x1[i], y1[i, 40, 40]);
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
  // testClass.display()
  testClass.display();

  circleEffect();
  // ellipse(x, y, 66, 66);
  //   ellipse(x + 10, y + 10, 66, 66);
  //     ellipse(x + 30, y + 30, 66, 66);
  //       ellipse(x + 50, y + 50, 66, 66);
// for (let i = 0; i < 20; i ++) {
//   ellipse(x, y, 66, 66);
// }

}

/*********************** TITLE STATE ******************************************/

function titleState() {

}

/*********************** RESET STATES *****************************************/

function resetStates() {

}

function circleEffect() {

  let randX = random(0, width);
  // let targetX = mouseX;
  let targetX = randX;
  let dx = targetX - x;
  x += dx * easing;

  let randY = random(0, height);

    // let targetY = mouseY;
    let targetY = randY;
    let dy = targetY - y;
    y += dy * easing;


  for (let i = 0; i < 2; i ++)  {
    y+= 2 * i;
    x+= 2 * i;
  }




}
