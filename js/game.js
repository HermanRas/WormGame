let fps = 4;
let rez = 20;
let food;
let w, h;

function setup() {
    frameRate(fps);
    createCanvas(400, 400);
    w = floor(width / rez);
    h = floor(height / rez);
    snake = new snake();
    foodLocation();
}

function foodLocation() {
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x, y);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    } else if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    } else if (key == ' ') {
        snake.grow();
    }
}

function draw() {
    if (snake.endGame()) {
        background(255, 0, 0);
        noLoop();
    }

    scale(rez);
    background(220);
    snake.update();
    snake.show();
    if (snake.eatFood(food)) {
        foodLocation();
    }

    noStroke();
    fill(0, 255, 0);
    rect(food.x, food.y, 1, 1);
}