function foodLocation() {
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x, y);
}

function showFood() {
    noStroke();
    fill(0, 150, 0);
    ellipse(food.x + 0.5, food.y + 0.5, 1);
}