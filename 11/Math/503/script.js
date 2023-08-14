function reset() {
    location.reload(); // reloads the webpage
}

function setUpContext() {
    console.log("Window is %d by %d", window.innerWidth, window.innerHeight);
    canvas = document.getElementById("mainCanvas");
    canvas.width = window.innerWidth - 40;
    canvas.height = window.innerHeight - 40;
    context = canvas.getContext("2d");
    return context;
}

class Circle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	draw() {
		context.fillStyle = "#EBCB8B";
        context.beginPath();
        context.arc(this.x, this.y, r, 0, 2 * Math.PI);
        context.fill();
	}
    checkPoint(x, y) {
        return Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) < r;
    }
}

class Point {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
        this.color = color;
	}
	draw() {
		context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, 4, 0, 2 * Math.PI);
        context.fill();
	}
    checkPoint(x, y) {
        return Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) < r;
    }
}

function drawAll() {
    context.fillStyle = "#2E3440";
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (let i in pennies) {
        pennies[i].draw();
    }

    let randX = Math.random() * canvas.width;
    let randY = Math.random() * canvas.height;
    let color = "#A3BE8C";
    for (let i in pennies) {
        if (pennies[i].checkPoint(randX, randY)) {
            color = "#BF616A";
            pointsOnPenny++;
            break;
        }
    }
    points.push(new Point(randX, randY, color));
    for (let i in points) {
        points[i].draw();
    }

    let percent = ((pointsOnPenny/points.length) * 100).toFixed(1);
    context.font = 1/20 * canvas.height + "px " + font;
    context.fillStyle = "#ECEFF4";
    context.textAlign = "left";
    context.fillText(percent + "%", 20, canvas.height/40 + 30);
    context.fillText(pointsOnPenny + "/" + points.length, 20, canvas.height/20 + 40);

    window.requestAnimationFrame(drawAll);
}

var canvas;
var context = setUpContext();
const font = "monospace";

var r = 20;

var pennies = [];
let x = 0;
let y = 0;

var pointsOnPenny = 0;

var points = [];

for (let i = 1; y < canvas.height + r; i++) {
    while (x < canvas.width + r) {
        let c = new Circle(x, y);
        x += 2 * r;
        pennies.push(c);
	}
    y += 2 * r * Math.sin(2/3 * Math.PI);
    x = 2 * r * -Math.cos(2/3 * Math.PI) * (i % 2);
}

window.requestAnimationFrame(drawAll);
