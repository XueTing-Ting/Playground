var sound1;
var sound2;
var font;
var img1;
var img2;

function preload() {
    sound1 = loadSound("Water-drops.mp3");
    sound2 = loadSound("Digital-drops.mp3");
    img1 = loadImage("drop1.png");
    img2 = loadImage("drop2.png");
    font = loadFont("D-DIN.otf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    amplitude = new p5.Amplitude();
    fft = new p5.FFT();
    frameRate(10);
    textFont("D-DIN");
    textSize(50);
}

function draw() {
    background(0);
    var aspect = img1.height / img1.width;
    var level = amplitude.getLevel();
    var size = map(level, 0, 1, 0, 10);
    fill(255);
    text("click to start", width / 2, height / 2);
    var r = random(255 * size);
    var g = random(255 * size);
    var b = random(255 * size);

    if (sound1.isPlaying()) {
        background(0);
        textSize(25);
        text("heavy rain", mouseX, mouseY);
        var x = random(width);
        var y = random(height);

        fill(r, g, b);
        ellipse(x, y, 150 * size, 150 * size);
        fill(r, g, b, 80);
        ellipse(x, y, 350 * size, 350 * size);
        fill(r, g, b, 40);
        ellipse(x, y, 550 * size, 550 * size);

    } else if (sound2.isPlaying()) {
        background(0);
        textSize(25);
        text("drizzle", mouseX, mouseY);

        for (x = 0; x <= width; x += 100) {
            y = random(height / 1.5);
            image(img1, x, y, 150 * size, 150 * size * aspect);
            fill(r, g, b, 60);
            ellipse(x, y, 50 * size, 50 * size);
        }
        for (x = 75; x <= width; x += 200) {
            y = random(height / 1.5);
            image(img2, x, y, 250 * size, 250 * size * aspect);
        }
    }

}


function mousePressed() {

    if (sound1.isPlaying()) {
        sound1.stop();
        sound2.loop();
        sound2.play();
        sound2.rate(1.5);
    } else if (sound2.isPlaying()) {
        sound2.stop();
        sound1.rate(.5);
        sound1.play();
        sound1.loop();
    } else {
        sound1.rate(.5);
        sound1.play();
        sound1.loop();
    }
}