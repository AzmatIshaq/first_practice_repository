/**
ProgressBar class
This class manages the fence strength bar at the end of the game.
 */

class ClassOne {

  constructor() {

    this.xc = constrain(mouseX, height, width);

    // Position and dimensions and fill colour of progress bar
    this.width = 99;
    this.height = 18.5;
    this.x = width / 23.7;
    this.y = height / 1.066;
    // Colour of progressbar
    this.progressBarFill = {
      r: 25,
      g: 161,
      b: 200,
      a: 255,
    };

    // progress bar name
    this.name = "progressBar";

    // Width of box outline of progress bar
    this.outlineWidth = 100;
    this.outlineHeight = 20;
    // Position of box outline of progress bar
    this.outlineX = constrain(mouseX, 20, 30);
    this.outlineAccelerate = 0;
    this.outlineY = height / 1.04;
    // progress box outline Color
    this.outlineStroke = 255;


    // Position for "progress" text above healtbar
    this.progressTextX = width / 10;
    this.progressTextY = height / 1.1;
    this.progressTextSize = 18;
    this.progressTextFill = 255;

    // Maximum progress value
    this.progressMax = 99;

    // Minimum progress value
    this.progressMin = 0;

  }

  display() {

    for (let i = 0; i < 2; i++) {
      // this.outlineX += i
      }

      // Fence text
      push();
      fill(this.progressTextFill);
      textAlign(CENTER, CENTER);
      textSize(this.progressTextSize);
      text('FENCE', this.progressTextX, this.progressText);
      pop();

      // Outline for progress bar
      push();
      stroke(this.outlineStroke);
      noFill();
      rectMode(CENTER);
      rect(this.outlineX, this.outlineY, this.outlineWidth, this.outlineHeight);
      pop();

      // progress bar retangle
      if (this.width > this.progressMin) {
        push();
        noStroke();
        fill(this.progressBarFill.r, this.progressBarFill.g, this.progressBarFill.b, this.progressBarFill.a);
        rectMode();
        rect(this.x, this.y, this.width, this.height);
        pop();

        push();
        fill(33,33,33);
        ellipse(this.xc, 80, 90, 91);
        pop();

    }
  }
}
