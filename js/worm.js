class Worm {

    constructor() {
        this.len = 1
        this.body = [];
        this.body[0] = createVector(floor(w / 2), floor(h / 2));
        this.xdir = 0;
        this.ydir = 0;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    grow() {
        let head = this.body[this.body.length - 1].copy();
        this.len++;
        this.body.push(head);
    }

    endGame() {
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;
        if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
            console.log('END GAME LINE');
            return true;
        }


        for (let i = 0; i < this.body.length - 1; i++) {
            let part = this.body[i];
            if (part.x == x && part.y == y) {
                console.log('END GAME HEAD IN BODY');
                return true;
            }
        }

        return false;
    }

    eatFood(pos) {
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;
        if (x == pos.x && y == pos.y) {
            this.grow();
            return true;
        }
        return false;
    }

    update() {
        let head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head);
    }

    show() {
        for (let i = 0; i < this.body.length; i++) {
            fill(0, 128, 0);
            if (i == this.body.length - 1) {
                fill(255, 255, 0);
                noStroke();
                ellipseMode(CORNER);
                ellipse(this.body[i].x, this.body[i].y, 1, 1);
                fill(0);
                ellipse(this.body[i].x, this.body[i].y, 0.5, 0.5);
                ellipse(this.body[i].x + 0.5, this.body[i].y, 0.5, 0.5);
            } else {
                noStroke();
                ellipseMode(CORNER);
                ellipse(this.body[i].x, this.body[i].y, 1, 1);
            }
        }
    }
}