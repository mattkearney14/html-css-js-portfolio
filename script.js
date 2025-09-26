// Grab the convoy element
const convoy = document.getElementById("convoy");

// Starting position
let pos = -500;
const stopAt = 300; // where it stops
const speed = 4;    // pixels per frame

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