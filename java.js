// Placeholder for JavaScript functionality
console.log("Welcome to My Portfolio!");

// Get the bubble element
const bubble = document.querySelector('.bubble');

// Set initial position and size
bubble.style.left = '100px';
bubble.style.top = '200px';
bubble.style.width = '50px';
bubble.style.height = '50px';

// Animate the bubble
setInterval(() => {
  // Update position, size, or other properties
  bubble.style.left = (Math.random() * window.innerWidth) + 'px';
}, 1000); // Change the interval for animation speed