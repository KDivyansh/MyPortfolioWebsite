const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

// Function to run the text animation
const runTextAnimation = (targetElement) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    targetElement.innerText = targetElement.dataset.value
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return targetElement.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if(iteration >= targetElement.dataset.value.length){ 
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

// Run the text animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const h2Element = document.querySelector("h2");
  runTextAnimation(h2Element);
});

// Event listener for the hover effect
document.querySelector("h2").onmouseover = event => {
  runTextAnimation(event.target);
};

// Responsive Hamburger Menu
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navbar.classList.remove("active");
  }
});
