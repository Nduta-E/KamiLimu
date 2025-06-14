

// Fade in on page load
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
  
  // Fade out on link click
  document.querySelectorAll("a").forEach(link => {
    if (link.href && !link.href.startsWith("#")) {
      link.addEventListener("click", e => {
        e.preventDefault();
        const target = link.href;
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = target;
        }, 500);
      });
    }
  });

  // Typing effect for dynamic subtitle
const typingElement = document.getElementById("typing-text");

if (typingElement) {
  const fullMessage = typingElement.textContent;
  typingElement.textContent = ""; // Clear it first

  let index = 0;

  function typeText() {
    if (index < fullMessage.length) {
      typingElement.textContent += fullMessage.charAt(index);
      index++;
      setTimeout(typeText, 80); // Speed of typing
    }
  }

  typeText();
}

  
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".fancy-title");
    const images = document.querySelectorAll(".hero-img");
  
    // Add animation class to header
    header.classList.add("bounce-in");
  
    // Add animation to images (with a slight delay)
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("bounce-img");
      }, 500 * index);
    });
  });
  