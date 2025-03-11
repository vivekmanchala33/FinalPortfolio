let colors = [];
let colorIndex = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colors = [
        color(255, 182, 193), // Light Pink
        color(255, 105, 180), // Hot Pink
        color(255, 20, 147)   // Deep Pink
    ];
    noStroke();
}

function draw() {
    background(lerpColor(colors[colorIndex], colors[(colorIndex + 1) % colors.length], frameCount / 300));
    if (frameCount % 300 === 0) {
        colorIndex = (colorIndex + 1) % colors.length;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}