function foodLocation() {
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x, y);
}

function showFood() {
    noStroke();
    fill(0, 255, 0);
    rect(food.x, food.y, 1, 1);
}