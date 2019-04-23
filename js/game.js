let fps = 4;
let rez = 20;
let food;
let w, h;
let score = 0;

let appleImg;
function preload() {
    appleImg = loadImage('IMG/apple.png');
}


function setup() {
    frameRate(fps);
    createCanvas(300, 300);
    w = floor(width / rez);
    h = floor(height / rez);
    worm = new worm();
    foodLocation();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        worm.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        worm.setDir(1, 0);
    } else if (keyCode === UP_ARROW) {
        worm.setDir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        worm.setDir(0, 1);
    } else if (key == ' ') {
        worm.grow();
    }
}

function draw() {
    scale(rez);
    background(220);

    if (worm.eatFood(food)) {
        foodLocation();
        addScore(1);
    }

    worm.update();
    showFood();
    worm.show();

    if (worm.endGame()) {
        background(255, 0, 0);
        noLoop();
        showScore();
    }
}