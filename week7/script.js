// Global scope variable
let animationCount = 0;

// Function with parameters and return value
function incrementCounter(step) {
  animationCount += step;
  return animationCount;
}

// Function to trigger the animation
function triggerAnimation() {
  const box = document.getElementById("box");

  // Add animation class
  box.classList.add("animate");

  // Remove animation class after it ends (so it can be re-triggered)
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  });

  // Update and log animation counter
  const total = incrementCounter(1);
  console.log(`Animation has been triggered ${total} times`);
}

// Attach event listener
document.getElementById("animationbutton").addEventListener("click", triggerAnimation);