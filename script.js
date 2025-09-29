// Grab the convoy element
const convoy = document.getElementById("convoy");

// Starting position
let pos = -500;
const speed = 4;    // pixels per frame
const stopAt = window.innerWidth * 0.50; // stop at 75% of screen width

// Animation loop
function drive() {
  if (pos < stopAt) {
    pos += speed; // move right
    convoy.style.left = pos + "px"; // update position
    requestAnimationFrame(drive);   // keep moving
  }
}

// Start animation
drive();