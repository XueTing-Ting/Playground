var eyeOpen = true;
var x;
var y;
var d;
var g;

function setup() {
    createCanvas(1024, 768);
}

function draw() {
    background(0);

    let x = map(mouseX, 0, width, width / 2 - 55, width / 2 + 5);
    let y = map(mouseY, 0, height, height / 2 - 15, height / 2 + 15);
    let d = dist(width / 2, height / 2, mouseX, mouseY);
    let g = map(d, 0, width / 2, 80, 175);

    if (eyeOpen == true) {
        strokeWeight(150);
        stroke(0, g, 0);
        for (a = 150; a <= width - 150; a += 350) {
            for (b = 50; b < height; b += 335) {
                point(a, b);
            }
        }
        noStroke();
        fill(255);
        ellipse(width / 2, height / 2, 400, 250);
        fill(20);
        ellipse(x, y, 150, 150);
        fill(255, 0, 0);
        arc(width / 2, height / 2, 400, 250, PI, 2 * PI);

        if (d >= 350) {
            stroke(255, 0, 0);
            strokeWeight(10);
            line(420, 400, 350, 270);
            line(470, 400, 420, 230);
            line(604, 400, 674, 270);
            line(554, 400, 604, 230);
            line(width / 2, height / 2, width / 2, 215);
            noStroke();
            fill(255);
            ellipse(width / 2, height / 2, 400, 250);
            fill(20);
            ellipse(x, y, 200, 200);
        }
    } else {
        background(0);
        strokeWeight(40);
        stroke(0, g, 0);
        for (a = 150; a <= width - 150; a += 350) {
            for (b = 50; b < height; b += 335) {
                line(a - 75, b, a + 75, b);
            }
        }
        noFill();
        stroke(255);
        strokeWeight(10);
        line(420, 400, 350, 498);
        line(470, 400, 420, 538);
        line(604, 400, 674, 498);
        line(554, 400, 604, 538);
        line(width / 2, height / 2, width / 2, 553);
        fill(255, 0, 0);
        noStroke();
        ellipse(width / 2, height / 2, 400, 250);
    }
}

function mousePressed() {
    eyeOpen = !eyeOpen;
}