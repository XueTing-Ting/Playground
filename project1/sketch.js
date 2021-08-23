let scene1;
let scene2;
let scene5;
let scene10;
let sound;
let myFont;
let size_h = windowHeight/3;
let size_w = windowHeight/2;
let margin;
let scene = 0;
let typed = "";

function preload() {
    scene1 = loadImage("scene1.jpg");
    scene2 = loadImage("scene2.jpg");
    scene5 = loadImage("scene5.jpg");
    scene10 = loadImage("scene10.jpg");
    sound = loadSound("bird.mp3");
    myFont = loadFont("segoepr.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(myFont);
    textSize(26);
    textAlign(LEFT);
}

function draw() {
    margin = (height - size_h) / 2;
    ellipseMode(CENTER);
    noStroke();
    /*scene0: story background */
    if (scene == 0) {
        background(15);
        push();
        translate(width / 2, height / 2);
        rectMode(CENTER);
        fill(250, 250, 250, 250);
        let c = "Have you ever feel that a random choice we make may play an important role in the natural food chain?";
        text(c, 0, 2 * margin, size_w, size_h);
        textSize(20);
        fill(250, 250, 250, 200);
        text('RIGHT_ARROW to start', size_w / 2, margin + size_h / 2 + 200, size_w / 2, size_h);
        pop();
    }
    /* scene1: the city, with tweedle*/
    else if (scene == 1) {
        importImage(scene1);
        writeContent("The city is like a giant concrete jungle. The living creatures inside play similar stories every day. Let's talk about one these stories.", 'RIGHT_ARROW to continue', 150);
    }
    /* scene2: cat looking for food*/
    else if (scene == 2) {
        drawBackground('#202');
        writeContent('A hungry stray cat is looking for food, he will', 'A.Hunting' + '\t' + '\t' + '\t' + '\t' + 'B.Get food from human', 50);
        push();
        toCenter();
        fill(255);
        ellipse(-150, 0, 240, 200);
        ellipse(150, 0, 240, 200);
        let rangeX = map(mouseX, 0, width, -35, 35);
        fill(100, 0, 100);
        ellipse(-150 + rangeX, 0, 50, 180);
        ellipse(150 + rangeX, 0, 50, 180);
        pop();
    }
    /* scene3: he sees a bird*/
    else if (scene == 3) {
        frameRate(2);
        importImage(scene2);
        writeContent('He finds a bird is eating the bread scraps on the road.', 'RIGHT_ARROW to continue', 50);
        push();
        toCenter();
        /* draw the bird*/
        let n = random(-1, 1);
        push();
        translate(100 * n, 100 * n);
        drawBird();
        pop();
        /* draw cat*/
        drawCat(700, 400);
        pop();
    }
    /* scene4: he tries to catch the bird but failed*/
    else if (scene == 4) {
        frameRate(2);
        importImage(scene2);
        writeContent('He tries to catch the bird, but the bird flies away', 'RIGHT_ARROW to continue', 50);
        stroke(100, 0, 100);
        strokeWeight(5);
        fill(100, 0, 100, 50);
        push();
        toCenter();
        /* draw the bird*/
        let m = random(-5, -1);
        push();
        translate(0, 100 * m);
        drawBird();
        pop();
        /* draw cat*/
        push();
        translate(0, 10 * m);
        drawCat(700, 400);
        pop();
        pop();
    }
    /* scene5: the bird sits on the window*/
    else if (scene == 5) {
        importImage(scene5);
        writeContent('The bird flies up to the window and sits on the sill. You will', 'A.close the window' + '\t' + '\t' + '\t' + '\t' + 'B.ignore the bird', 50);
        push();
        toCenter();
        push();
        /* draw the bird*/
        translate(-50, 50);
        birdSide();
        pop();
        pop();
    }
    /* scene6: close window*/
    else if (scene == 6) {
        importImage(scene5);
        writeContent("When you're closing the window, the bird is frightened and flies away.", 'RIGHT_ARROW to continue', 50);
        push();
        toCenter();
        push();
        translate(-400, -300);
        rotate(-60 / 180);
        birdSide();
        pop();
        rectMode(CENTER);
        /*draw window*/
        fill(50, 0, 50);
        rect(0, 0, 300, 300);
        fill(130, 0, 150);
        rect(0, 0, 20, 300);
        rect(0, 0, 300, 20);
        pop();
    }
    /* scene7: cat ask for food*/
    else if (scene == 7) {
        frameRate(5);
        importImage(scene5);
        writeContent('The stray cat sees the opening window, he meows outside, asking for some food. You will', 'A. feed cat' + '\t' + '\t' + '\t' + '\t' + 'B. close window', 50);
        push();
        toCenter();
        /* draw bird*/
        push();
        translate(-50, 50);
        birdSide();
        pop();
        /* draw cat*/
        drawCat(350, 200);
        for (i = -150; i <= 200; i += 50) {
            for (j = 0; j <= 100; j += 50) {
                fill(100, 0, 100, 200);
                let n = random(10, 40);
                push();
                translate(i - n, j - n);
                textSize(n);
                text('Meow', i, j);
                pop();
            }
        }
        pop();
    }
    /* scene8: bird leave, cat stay*/
    else if (scene == 8) {
        importImage(scene5);
        writeContent("When you're closing the window, the bird is frightened and flies away.", 'RIGHT_ARROW to continue', 50);
        push();
        toCenter();
        push();
        translate(-400, -300);
        rotate(-60 / 180);
        birdSide();
        pop();
        rectMode(CENTER);
        /*draw window*/
        fill(50, 0, 50);
        rect(0, 0, 300, 300);
        fill(130, 0, 150);
        rect(0, 0, 20, 300);
        rect(0, 0, 300, 20);
        /* draw cat*/
        drawCat(350, 200);
        for (i = -150; i <= 200; i += 50) {
            for (j = 0; j <= 100; j += 50) {
                fill(100, 0, 100, 200);
                let n = random(10, 40);
                push();
                translate(i - n, j - n);
                textSize(n);
                text('Meow', i, j);
                pop();
            }
        }
        pop();
    }
    /* scene9: cat wait*/
    else if (scene == 9) {
        importImage(scene5);
        writeContent('The cat is so hungry, and he keeps meowing outside. You will', 'A. leave the cat alone' + '\t' + '\t' + '\t' + '\t' + 'B.feed the cat', 50);
        push();
        toCenter();
        rectMode(CENTER);
        /*draw window*/
        fill(50, 0, 50);
        rect(0, 0, 300, 300);
        fill(130, 0, 150);
        rect(0, 0, 20, 300);
        rect(0, 0, 300, 20);
        /* draw cat*/
        drawCat(350, 200);
        for (i = -150; i <= 200; i += 50) {
            for (j = 0; j <= 100; j += 50) {
                fill(100, 0, 100, 200);
                let n = random(10, 40);
                push();
                translate(i - n, j - n);
                textSize(n);
                text('Meow', i, j);
                pop();
            }
        }
        pop();
    }
    /* scene10: cat leave*/
    else if (scene == 10) {
        importImage(scene5);
        writeContent('The cat gives up, and he goes back to hunt.', 'RIGHT_ARROW to continue', 50);
        push();
        toCenter();
        rectMode(CENTER);
        /*draw window*/
        fill(50, 0, 50);
        rect(0, 0, 300, 300);
        fill(130, 0, 150);
        rect(0, 0, 20, 300);
        rect(0, 0, 300, 20);
        pop();
    }
    /* scene11: cat catches the bird*/
    else if (scene == 11) {
        frameRate(3);
        drawBackground('#fef');
        writeContent('The frightened bird has been flying for a long time and finally finds a place to rest. This time, the cat catches the bird and eats the bird.', 'RIGHT_ARROW to continue', 150);
        push();
        toCenter();
        let m = random(-5, -1);
        push();
        translate(-100, 10 * m);
        birdSide();
        pop();
        push();
        translate(0, 20 * m);
        drawCat(700, 400);
        pop();
        pop();
    }
    /* scene12: city, without tweedle*/
    else if (scene == 12) {
        importImage(scene1);
        writeContent('Everything seems the same as usual. Is it?', 'RIGHT_ARROW to restart', 50);
    }
    /* scene13: cat eats food*/
    else if (scene == 13) {
        frameRate(2);
        importImage(scene10);
        writeContent('The cat is enjoying the delicious food. But you may not notice a small change happens in your life.', 'RIGHT_ARROW to continue', 50);
        push();
        toCenter();
        for (i = -100; i <= 150; i += 10) {
            for (j = -100; j <= 150; j += 10) {
                fill(150, 150, 0, 150);
                let n = random(1, 10);
                push();
                translate(i - n, j - n);
                ellipse(0, 0, 20 * n, 20 * n);
                pop();
            }
        }
        push();
        let m = random(-2, -1);
        translate(0, 20 * m);
        drawCat(700, 400);
        pop();
        drawCat(700, 400);
        pop();
    }
    /* scene14: life is covered by meow*/
    else if (scene == 14) {
        frameRate(5);
        importImage(scene5);
        writeContent("Your life will be covered by 'Meow' whenever the cat is hungry.", 'RIGHT_ARROW to restart', 50);
        push();
        toCenter();
        for (i = -200; i <= 200; i += 20) {
            for (j = -150; j <= 150; j += 20) {
                fill(100, 0, 100, 200);
                let n = random(10, 40);
                push();
                translate(i - n, j - n);
                textSize(n);
                text('Meow', i, j);
                pop();
            }
        }
        /* draw cat*/
        drawCat(350, 200);
        pop();
    }
    fill(250);
    text(typed, 2 * margin + size_w, 3 * margin + size_h / 2);
}

function toCenter() {
    translate(margin + size_w / 2, margin + size_h / 2);
}

function drawBackground(col) {
    background(15);
    fill(col);
    rect(margin, margin, size_w, size_h);
}

function importImage(photo) {
    background(15);
    image(photo, margin, margin, size_w, size_h);
}

function writeContent(intro, content, move_h) {
    fill(250, 250, 250, 250);
    text(intro, 2 * margin + size_w, size_h / 4, size_w / 2, size_h);
    fill(250, 250, 250, 200);
    push();
    textSize(20);
    text(content, 2 * margin + size_w, margin + size_h / 4 + move_h, size_w / 2, size_h);
    pop();
}

function drawBird() {
    stroke(100, 0, 100);
    strokeWeight(5);
    fill(100, 0, 100, 50);
    let v1 = createVector(-20, -20);
    let v2 = createVector(0, -20);
    let v3 = createVector(20, -20);
    line(0, 0, v1.x, v1.y);
    line(45, 0, v1.x + 45, v1.y);
    line(0, 0, v2.x, v2.y);
    line(45, 0, v2.x + 45, v2.y);
    line(0, 0, v3.x, v3.y);
    line(45, 0, v3.x + 45, v3.y);
    noStroke();
    ellipse(20, -5, 150, 130);
}

function birdSide() {
    fill('#ebe');
    triangle(0, -30, -80, 0, 0, 50);
    rect(0, 0, 10, 70, 10);
    rect(-20, 65, 40, 10, 10);
    fill(100, 0, 100);
    ellipse(0, 0, 120, 120);
    rect(0, 0, 60, 60);
    fill('#ebe');
    ellipse(-20, -10, 15, 15);
    arc(5, 10, 60, 60, -QUARTER_PI, HALF_PI);
}

function drawCat(w, h) {
    fill(50, 0, 50);
    noStroke();
    rectMode(CENTER);
    rect(0, size_h / 2 - h / 4, w, h / 2, 15, 15, 100, 100);
    ellipse(0, size_h / 2, 0.85 * w, 0.85 * w);
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        typed = "";
        if (scene == 0) {
            sound.loop(0, 0.3, 0.1);
            scene = 1;
        } else if (scene == 1) {
            sound.stop();
            scene = 2;
        } else if (scene == 3) {
            scene = 4;
        } else if (scene == 4) {
            scene = 5;
        } else if (scene == 6) {
            scene = 11;
        } else if (scene == 13) {
            scene = 14;
        } else if (scene == 8) {
            scene = 9;
        } else if (scene == 10) {
            scene = 11;
        } else if (scene == 11) {
            scene = 12;
        } else if (scene == 12) {
            scene = 0;
        } else if (scene == 13) {
            scene = 14;
        } else if (scene == 14) {
            scene = 0;
        }
    } else if (keyCode == RETURN) {
        if (scene == 2) {
            if (typed == 'A') {
                scene = 3;
                typed = "";
            } else if (typed == 'B') {
                scene = 5;
                typed = "";
            }
        } else if (scene == 4) {
            if (typed == 'A') {
                scene = 5;
                typed = "";
            } else if (typed == 'B') {
                scene = 6;
                typed = "";
            }
        } else if (scene == 5) {
            if (typed == 'A') {
                scene = 6;
                typed = "";
            } else if (typed == 'B') {
                scene = 7;
                typed = "";
            }
        } else if (scene == 7) {
            if (typed == 'A') {
                scene = 13;
                typed = "";
            } else if (typed == 'B') {
                scene = 8;
                typed = "";
            }
        } else if (scene == 9) {
            if (typed == 'A') {
                scene = 10;
                typed = "";
            } else if (typed == 'B') {
                scene = 13;
                typed = "";
            }
        }
    } else if (keyCode == BACKSPACE) {
        typed = "";
    }
}

function keyTyped() {
    typed += key;
    if (scene == 0 || scene == 1 || scene == 3 || scene == 4 || scene == 6 || scene == 8 || scene == 10 || scene == 11 || scene == 12 || scene == 13 || scene == 14) {
        typed = "";
    }
}