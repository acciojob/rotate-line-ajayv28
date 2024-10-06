//your JS code here. If required.
const line = document.getElementById('line');
let angle = 0;

function rotateLine() {
    angle += 2; // Increment angle by 2 degrees
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Apply rotation
}

// Call rotateLine every 20 milliseconds
setInterval(rotateLine, 20);
