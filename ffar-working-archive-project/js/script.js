/**
Project title
Author

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Sound variables
let barkSound;
// let printSound;
let guitarSound;
// let cutlerySound;
// let tvSound;
let soundC;
let soundD;
let soundE;
let soundF;


// Image variables
let thinkEmojiImg;
let fingerEmojiImg;
let myselfImg;

let arrayKeyCodes = [65, 66, 67];


// Scorekeeper to track choices
let scoreKeeper = 0;

// Track collection status

let barkCollected = false;
let guitarCollected = false;
let soundCCollected = false;
let soundDCollected = false;
let soundECollected = false;
let soundFCollected = false;



// Sounds Array


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
// let state = `animation`;

let rectArray = [];

let ellipArray = [];


// Fills for the keys
let rectFill = {
  r: 255,
  g: 255,
  b: 255
};

let rectFillB = {
  r: 255,
  g: 255,
  b: 255
}

let rectFillC = {
  r: 255,
  g: 255,
  b: 255
}

let rectFillD = {
  r: 255,
  g: 255,
  b: 255
}

let rectFillE = {
  r: 255,
  g: 255,
  b: 255
}

let rectFillF = {
  r: 255,
  g: 255,
  b: 255
}

// Letter Rect positions

let rectA = {
  x: 350,
  y: 200,
  x2: 350,
  y2: 200
};

let rectB = {
  x: 420,
  y: 200,
  x2: 420,
  y2: 200
};

let rectC = {
  x: 490,
  y: 200,
  x2: 490,
  y2: 200
};

let rectD = {
  x: 350,
  y: 270,
  x2: 350,
  y2: 270
};

let rectE = {
  x: 420,
  y: 270,
  x2: 420,
  y2: 270
};

let rectF = {
  x: 490,
  y: 270,
  x2: 490,
  y2: 270
};




// Timer for end of project
let timer = 5


/*********************** PRELOAD **********************************************/

/**
Description of preload
*/
function preload() {

  // Preload Sounds
  barkSound = loadSound(`assets/sounds/guitar-8.mp3`);
  // tvSound = loadSound(`assets/sounds/tv.mp3`);
  // printSound = loadSound(`assets/sounds/printer.mp3`);
  guitarSound = loadSound(`assets/sounds/guitar.mp3`);
  soundC = loadSound(`assets/sounds/guitar2.mp3`);
  soundD = loadSound(`assets/sounds/guitar3.mp3`);
  soundE = loadSound(`assets/sounds/guitar-6.mp3`);
  soundF = loadSound(`assets/sounds/guitar-5.mp3`);

  // Preload Images
  thinkEmojiImg = loadImage(`assets/images/think-emoji.png`);
  fingerEmojiImg = loadImage(`assets/images/finger-emoji.png`);
  myselfImg = loadImage(`assets/images/my_pic_pixelated.png`);

}


/*********************** SETUP ************************************************/

/**
Description of setup
*/
function setup() {

  createCanvas(canvasProperties.w, canvasProperties.h);

  userStartAudio();

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

  if (state === `end`) {
    endState();
  }

} // End of draw()

/* - - - - - - - - - - - USER INTERACTION - - - - - - - - - - - - - - - - - - */

/*********************** KEY PRESSED ******************************************/

function keyPressed() {


}

function keyReleased() {



}



/*********************** MOUSE PRESSED ****************************************/

// function mousePressed() {
// }

/* - - - - - - - - - - - STATES - - - - - - - - - - - - - - - - - - - - - - - */

/*********************** ANIMATION STATE **************************************/

function animationState() {

  // Collection text

  push();
  fill(255);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(`Collection` + ` ` + `${scoreKeeper}`, width / 1.19, height / 4);
  pop();


  // Collection Rectangle

  push();
  fill(0, 200, 200);
  rectMode(CENTER);
  rect(717, 320, 150, 300);
  pop();

// Display think emoji
image(thinkEmojiImg, 110, 250, 100, 100);



// Initiate end state
// Initiate end state after a short pause

if (scoreKeeper === 3) {

  push();
  fill(255);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(`Press Enter to CONFIRM`, width / 1.19, height / 1.06);
  pop();

  setTimeout(
    function(){
      if (keyIsPressed === true && keyCode === 13) {
        state = `end`
      }
    },
    500);

}



// Reset the keys if more than 3 are chosen
if (scoreKeeper > 3) {
  scoreKeeper = 0;

 barkCollected = false;
 guitarCollected = false;
 soundCCollected = false;
 soundDCollected = false;
 soundECollected = false;
 soundFCollected = false;

  rectA = {
   x: 350,
   y: 200,
   x2: 350,
   y2: 200
 };

  rectB = {
   x: 420,
   y: 200,
   x2: 420,
   y2: 200
 };

  rectC = {
   x: 490,
   y: 200,
   x2: 490,
   y2: 200
 };

  rectD = {
   x: 350,
   y: 270,
   x2: 350,
   y2: 270
 };

  rectE = {
   x: 420,
   y: 270,
   x2: 420,
   y2: 270
 };

  rectF = {
   x: 490,
   y: 270,
   x2: 490,
   y2: 270
 };

}


// Functions to display and manage audio keys
  audioA();
  audioB();
  audioC();
  audioD();
  audioE();
  audioF();

// Instructions

  push();
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(`Type the key to activate audio`, width / 2, 55);
  text(`Chose 3 letters for the collection`, width / 2, 90);
  pop();








} // End of animation

/*********************** TITLE STATE ******************************************/

function titleState() {

  push();
  fill(255);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(`Could you help me manage my audio recordings?`, width / 2, height / 6);
  pop();

  push();
  fill(255);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(`Just pick 3 audio pieces you think I should keep`, width / 2, height / 4);
  pop();

  push();
  fill(255);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(`Press Enter to Continue`, width / 2, height / 1.09);
  pop();

  push();
  imageMode(CENTER);
  image(myselfImg, width / 2, 300, 180, 180);
  pop();


    if (keyIsPressed === true && keyCode === 13) {
      state = `animation`;
    }
}

/*********************** RESET STATES *****************************************/

function resetStates() {

}



// End state

function endState() {

  // Add pixelated image of me


  push();
  fill(255);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(`Archive Succesfully Edited!`, width / 2, height / 5.7);
  // text(`Thanks for the help!`, width / 2, height / 4);
  text(`The other files will be permanently deleted`, width / 2, height / 4);
  text(`Thank you for your contribution`, width / 2, height / 1.08);
  // text(`This entire interaction will now be deleted.`, width / 2, height / 1.3);
  // text(`Make sure to memorize it just in case.`, width / 2, height / 1.09);
  pop();

  push();
  imageMode(CENTER);
  image(myselfImg, width / 2, 300, 180, 180);
  pop();


// Countdown Timer
  //
  // if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
  //   timer --;
  // }
  // if (timer == 0) {
  //   text("GAME OVER", width/2, height*0.7);
  // }

}



function audioA() {

  barkSound.setVolume(0.1);

  // Key Rectangle
    push();
    fill(rectFill.r, rectFill.g, rectFill.b);
    rectMode(CENTER);
    rect(rectA.x, rectA.y, 55, 55, 13);
    pop();

    if (keyIsPressed === true && keyCode === 65) {
      if (!barkSound.isPlaying()) {
        barkSound.loop();
        rectFill.r = 33;
        rectFill.g = 150;
        rectFill.b = 243;
      }
    }

  // Stop playing the sound if it is playing
    if (barkSound.isPlaying() && keyCode === 32) {
      barkSound.stop();
       rectFill.r = 255;
       rectFill.g = 255;
       rectFill.b = 255;
    }

  // Chose the track for the collection by pressing Enter
    if (barkSound.isPlaying() && keyCode === 13) {
      barkSound.stop();
       rectFill.r = 255;
       rectFill.g = 255;
       rectFill.b = 255;

      // Update collections status and scoreKeeper
       if (barkCollected === false) {
       barkCollected = true;
       scoreKeeper++;
     }

     rectA.x = 680;
     rectA.y = 210;

     //   if (scoreKeeper === 1) {
     //
     //   rectA.x = 715;
     //   rectA.y = 250;
     //
     // } else if (scoreKeeper === 2) {
     //
     //   rectA.x = 715;
     //   rectA.y = 330;
     //
     // } else if (scoreKeeper === 3) {
     //
     //   rectA.x = 715;
     //   rectA.y = 410;
     // }
    }

  // Remove the track from collection by hitting backspace
    if (barkSound.isPlaying() && keyCode === 8) {
      barkSound.stop();
       rectFill.r = 255;
       rectFill.g = 255;
       rectFill.b = 255;

       rectA.x = rectA.x2;
       rectA.y = rectA.y2;

       if (barkCollected) {
         barkCollected = false;
         scoreKeeper--;
       }
    }


  if (barkSound.isPlaying()) {
    push();
    fill(255);
    textSize(22);
    textAlign(CENTER, CENTER);
    text(`Press 'Space' to Pause`, width / 2, height / 1.5);
    text(`Press 'Enter' to Collect`, width / 2, height / 1.3);
    text(`Press 'Backspace' to Remove from Collection`, width / 2, height / 1.1)
    pop();
  }

    // Letter on Rect

    push();
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(`A`, rectA.x, rectA.y);
    pop();
}

function audioB() {

  // Set volume of audioB

  guitarSound.setVolume(0.1);


    // Key Rectangle
      push();
      fill(rectFillB.r, rectFillB.g, rectFillB.b);
      rectMode(CENTER);
      rect(rectB.x, rectB.y, 55, 55, 13);
      pop();

      if (keyIsPressed === true && keyCode === 66) {
        if (!guitarSound.isPlaying()) {
          guitarSound.loop();
          rectFillB.r = 33;
          rectFillB.g = 150;
          rectFillB.b = 243;
        }
      }

    // Stop playing the sound if it is playing witht he spacebar
      if (guitarSound.isPlaying() && keyCode === 32) {
        guitarSound.stop();
         rectFillB.r = 255;
         rectFillB.g = 255;
         rectFillB.b = 255;
      }

    // Chose the track for the collection by pressing Enter
      if (guitarSound.isPlaying() && keyCode === 13) {
        guitarSound.stop();
         rectFillB.r = 255;
         rectFillB.g = 255;
         rectFillB.b = 255;

        // Update collections status and scoreKeeper
         if (guitarCollected === false) {
         guitarCollected = true;
         scoreKeeper++;
       }

       rectB.x = 750;
       rectB.y = 210;

       //   if (scoreKeeper === 1) {
       //
       //   rectB.x = 715;
       //   rectB.y = 250;
       //
       // } else if (scoreKeeper === 2) {
       //
       //   rectB.x = 715;
       //   rectB.y = 330;
       //
       // } else if (scoreKeeper === 3) {
       //
       //   rectB.x = 715;
       //   rectB.y = 410;
       // }
      }

    // Remove the track from collection by hitting backspace
      if (guitarSound.isPlaying() && keyCode === 8) {
        guitarSound.stop();
         rectFillB.r = 255;
         rectFillB.g = 255;
         rectFillB.b = 255;

         rectB.x = rectB.x2;
         rectB.y = rectB.y2;

         if (guitarCollected) {
           guitarCollected = false;
           scoreKeeper--;
         }
      }


    if (guitarSound.isPlaying()) {
      push();
      fill(255);
      textSize(22);
      textAlign(CENTER, CENTER);
      text(`Press 'Space' to Pause`, width / 2, height / 1.5);
      text(`Press 'Enter' to Collect`, width / 2, height / 1.3);
      text(`Press 'Backspace' to Remove from Collection`, width / 2, height / 1.1)
      pop();
    }

    // Letter on Rect
    push();
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(`B`, rectB.x, rectB.y);
    pop();
}

function audioC() {

  // Set volume of audioC

  soundC.setVolume(0.1);


    // Key Rectangle
      push();
      fill(rectFillC.r, rectFillC.g, rectFillC.b);
      rectMode(CENTER);
      rect(rectC.x, rectC.y, 55, 55, 13);
      pop();

      if (keyIsPressed === true && keyCode === 67) {
        if (!soundC.isPlaying()) {
          soundC.loop();
          rectFillC.r = 33;
          rectFillC.g = 150;
          rectFillC.b = 243;
        }
      }

    // Stop playing the sound if it is playing witht he spacebar
      if (soundC.isPlaying() && keyCode === 32) {
        soundC.stop();
         rectFillC.r = 255;
         rectFillC.g = 255;
         rectFillC.b = 255;
      }

    // Chose the track for the collection by pressing Enter
      if (soundC.isPlaying() && keyCode === 13) {
        soundC.stop();
         rectFillC.r = 255;
         rectFillC.g = 255;
         rectFillC.b = 255;

        // Update collections status and scoreKeeper
         if (soundCCollected === false) {
         soundCCollected = true;
         scoreKeeper++;
       }

       rectC.x = 680;
       rectC.y = 290;

       //   if (scoreKeeper === 1) {
       //
       //   rectC.x = 715;
       //   rectC.y = 250;
       //
       // } else if (scoreKeeper === 2) {
       //
       //   rectC.x = 715;
       //   rectC.y = 330;
       //
       // } else if (scoreKeeper === 3) {
       //
       //   rectC.x = 715;
       //   rectC.y = 410;
       // }
      }

    // Remove the track from collection by hitting backspace
      if (soundC.isPlaying() && keyCode === 8) {
        soundC.stop();
         rectFillC.r = 255;
         rectFillC.g = 255;
         rectFillC.b = 255;

         rectC.x = rectC.x2;
         rectC.y = rectC.y2;

         if (soundCCollected) {
           soundCCollected = false;
           scoreKeeper--;
         }
      }


    if (soundC.isPlaying()) {
      push();
      fill(255);
      textSize(22);
      textAlign(CENTER, CENTER);
      text(`Press 'Space' to Pause`, width / 2, height / 1.5);
      text(`Press 'Enter' to Collect`, width / 2, height / 1.3);
      text(`Press 'Backspace' to Remove from Collection`, width / 2, height / 1.1)
      pop();
    }

    // Letter on Rect
    push();
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(`C`, rectC.x, rectC.y);
    pop();


}
function audioD() {

    // Set volume of audioD
    soundD.setVolume(0.1);

      // Key Rectangle
        push();
        fill(rectFillD.r, rectFillD.g, rectFillD.b);
        rectMode(CENTER);
        rect(rectD.x, rectD.y, 55, 55, 13);
        pop();

        if (keyIsPressed === true && keyCode === 68) {
          if (!soundD.isPlaying()) {
            soundD.loop();
            rectFillD.r = 33;
            rectFillD.g = 150;
            rectFillD.b = 243;
          }
        }

      // Stop playing the sound if it is playing witht he spacebar
        if (soundD.isPlaying() && keyCode === 32) {
          soundD.stop();
           rectFillD.r = 255;
           rectFillD.g = 255;
           rectFillD.b = 255;
        }

      // Chose the track for the collection by pressing Enter
        if (soundD.isPlaying() && keyCode === 13) {
          soundD.stop();
           rectFillD.r = 255;
           rectFillD.g = 255;
           rectFillD.b = 255;

          // Update collections status and scoreKeeper
           if (soundDCollected === false) {
           soundDCollected = true;
           scoreKeeper++;
         }

         rectD.x = 750;
         rectD.y = 290;


         //   if (scoreKeeper === 1) {
         //
         //   rectD.x = 715;
         //   rectD.y = 250;
         //
         // } else if (scoreKeeper === 2) {
         //
         //   rectD.x = 715;
         //   rectD.y = 330;
         //
         // } else if (scoreKeeper === 3) {
         //
         //   rectD.x = 715;
         //   rectD.y = 410;
         // }
        }

      // Remove the track from collection by hitting backspace
        if (soundD.isPlaying() && keyCode === 8) {
          soundD.stop();
           rectFillD.r = 255;
           rectFillD.g = 255;
           rectFillD.b = 255;

           rectD.x = rectD.x2;
           rectD.y = rectD.y2;

           if (soundDCollected) {
             soundDCollected = false;
             scoreKeeper--;
           }
        }


      if (soundD.isPlaying()) {
        push();
        fill(255);
        textSize(22);
        textAlign(CENTER, CENTER);
        text(`Press 'Space' to Pause`, width / 2, height / 1.5);
        text(`Press 'Enter' to Collect`, width / 2, height / 1.3);
        text(`Press 'Backspace' to Remove from Collection`, width / 2, height / 1.1)
        pop();
      }

      // Letter on Rect
      push();
      fill(0);
      textSize(32);
      textAlign(CENTER, CENTER);
      text(`D`, rectD.x, rectD.y);
      pop();
}

function audioE() {

  // Set volume of audioE
  soundE.setVolume(0.1);

    // Key Rectangle
      push();
      fill(rectFillE.r, rectFillE.g, rectFillE.b);
      rectMode(CENTER);
      rect(rectE.x, rectE.y, 55, 55, 13);
      pop();

      if (keyIsPressed === true && keyCode === 69) {
        if (!soundE.isPlaying()) {
          soundE.loop();
          rectFillE.r = 33;
          rectFillE.g = 150;
          rectFillE.b = 243;
        }
      }

    // Stop playing the sound if it is playing witht he spacebar
      if (soundE.isPlaying() && keyCode === 32) {
        soundE.stop();
         rectFillE.r = 255;
         rectFillE.g = 255;
         rectFillE.b = 255;
      }

    // Chose the track for the collection by pressing Enter
      if (soundE.isPlaying() && keyCode === 13) {
        soundE.stop();
         rectFillE.r = 255;
         rectFillE.g = 255;
         rectFillE.b = 255;

        // Update collections status and scoreKeeper
         if (soundECollected === false) {
         soundECollected = true;
         scoreKeeper++;
       }

       rectE.x = 680;
       rectE.y = 360;

       //   if (scoreKeeper === 1) {
       //
       //   rectE.x = 715;
       //   rectE.y = 250;
       //
       // } else if (scoreKeeper === 2) {
       //
       //   rectE.x = 715;
       //   rectE.y = 330;
       //
       // } else if (scoreKeeper === 3) {
       //
       //   rectE.x = 715;
       //   rectE.y = 410;
       // }
      }

    // Remove the track from collection by hitting backspace
      if (soundE.isPlaying() && keyCode === 8) {
        soundE.stop();
         rectFillE.r = 255;
         rectFillE.g = 255;
         rectFillE.b = 255;

         rectE.x = rectE.x2;
         rectE.y = rectE.y2;

         if (soundECollected) {
           soundECollected = false;
           scoreKeeper--;
         }
      }


    if (soundE.isPlaying()) {
      push();
      fill(255);
      textSize(22);
      textAlign(CENTER, CENTER);
      text(`Press 'Space' to Pause`, width / 2, height / 1.5);
      text(`Press 'Enter' to Collect`, width / 2, height / 1.3);
      text(`Press 'Backspace' to Remove from Collection`, width / 2, height / 1.1)
      pop();
    }

    // Letter on Rect
    push();
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(`E`, rectE.x, rectE.y);
    pop();
}

function audioF() {
  // Set volume of audioF
  soundF.setVolume(0.1);

    // Key Rectangle
      push();
      fill(rectFillF.r, rectFillF.g, rectFillF.b);
      rectMode(CENTER);
      rect(rectF.x, rectF.y, 55, 55, 13);
      pop();

      if (keyIsPressed === true && keyCode === 70) {
        if (!soundF.isPlaying()) {
          soundF.loop();
          rectFillF.r = 33;
          rectFillF.g = 150;
          rectFillF.b = 243;
        }
      }

    // Stop playing the sound if it is playing witht he spacebar
      if (soundF.isPlaying() && keyCode === 32) {
        soundF.stop();
         rectFillF.r = 255;
         rectFillF.g = 255;
         rectFillF.b = 255;
      }

    // Chose the track for the collection by pressing Enter
      if (soundF.isPlaying() && keyCode === 13) {
        soundF.stop();
         rectFillF.r = 255;
         rectFillF.g = 255;
         rectFillF.b = 255;

        // Update collections status and scoreKeeper
         if (soundFCollected === false) {
         soundFCollected = true;
         scoreKeeper++;
       }

       rectF.x = 750;
       rectF.y = 360;

       //   if (scoreKeeper === 1) {
       //
       //   rectF.x = 715;
       //   rectF.y = 250;
       //
       // } else if (scoreKeeper === 2) {
       //
       //   rectF.x = 715;
       //   rectF.y = 330;
       //
       // } else if (scoreKeeper === 3) {
       //
       //   rectF.x = 715;
       //   rectF.y = 410;
       // }
      }

    // Remove the track from collection by hitting backspace
      if (soundF.isPlaying() && keyCode === 8) {
        soundF.stop();
         rectFillF.r = 255;
         rectFillF.g = 255;
         rectFillF.b = 255;

         rectF.x = rectF.x2;
         rectF.y = rectF.y2;

         if (soundFCollected) {
           soundFCollected = false;
           scoreKeeper--;
         }
      }


    if (soundF.isPlaying()) {
      push();
      fill(255);
      textSize(22);
      textAlign(CENTER, CENTER);
      text(`Press 'Space' to Pause`, width / 2, height / 1.5);
      text(`Press 'Enter' to Collect`, width / 2, height / 1.3);
      text(`Press 'Backspace' to Remove from Collection`, width / 2, height / 1.1)
      pop();
    }

    // Letter on Rect
    push();
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(`F`, rectF.x, rectF.y);
    pop();
}
