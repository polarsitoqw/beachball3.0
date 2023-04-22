// Get the canvas and drawing context
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Define ball properties
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 20;
var velocityX = 2;
var velocityY = -2;

// Counter
var counter = 0;

// Load sound files
var bounceSound = new Audio('bounce.mp3');
var ambientSound = new Audio('beach.mp3');

// Function to update counter in HTML
function updateCounter() {
  document.getElementById('counter').textContent = counter;
}

// Function to draw the ball on the canvas
function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
}

// Function to update ball position and detect bounces
function moveBall() {
  x += velocityX;
  y += velocityY;

  // Detect bounce on canvas edges
  if (x + radius > canvas.width || x - radius < 0) {
    velocityX = -velocityX;
    bounceSound.currentTime = 0;
    bounceSound.play();
    counter++;
    updateCounter();
  }
  if (y + radius > canvas.height || y - radius < 0) {
    velocityY = -velocityY;
    bounceSound.currentTime = 0;
    bounceSound.play();
    counter++;
    updateCounter();
  }

  // Call the drawBall function on the next animation frame
  drawBall();
  requestAnimationFrame(moveBall);
}

// Start playing ambient sound
ambientSound.loop = true;
ambientSound.play();

// Call the moveBall function to start the animation
moveBall();
