
function foodLocation() {
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x, y);
}

function showFood() {
    noStroke();
    fill(0, 150, 0);
    image(appleImg, food.x, food.y, 1, 1);
}