const circle = document.getElementById('circle');
const hoverLinks = document.querySelectorAll('.outskirts');

// Initial positions of the circle
let circleX = window.innerWidth / 2;
let circleY = window.innerHeight / 2;

// Target positions (where the cursor is)
let targetX = circleX;
let targetY = circleY;

// A smoothness factor for lag
const smoothness = 0.1;

// Circle size (default and during hover)
let circleSize = 400;

function animate() {
  // Interpolate the circle position toward the target position
  circleX += (targetX - circleX) * smoothness;
  circleY += (targetY - circleY) * smoothness;

  // Update the circle position, offset by half its size
  circle.style.transform = `translate(${circleX - circleSize / 2}px, ${circleY - circleSize / 2}px)`;

  // Repeat the animation
  requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

// Add event listeners for links (shrink significantly)
hoverLinks.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    circleSize = 20; // Shrink significantly
    circle.style.width = `${circleSize}px`;
    circle.style.height = `${circleSize}px`;
  });

  link.addEventListener('mouseleave', () => {
    circleSize = 400; // Restore size
    circle.style.width = `${circleSize}px`;
    circle.style.height = `${circleSize}px`;
  });
});


// Start the animation loop
animate();
