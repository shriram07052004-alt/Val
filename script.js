// Get elements from the page
const valentineBtn = document.getElementById("valentineBtn");
const response = document.getElementById("response");
const yesNoButtons = document.getElementById("yesNoButtons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsContainer = document.querySelector(".hearts");

// When the valentine button is clicked, show yes/no buttons
valentineBtn.addEventListener("click", () => {
    response.textContent = "So... what do you say? 😋";
    valentineBtn.style.display = "none";
    yesNoButtons.style.display = "flex";
});

// Yes button click - show the loving message
yesBtn.addEventListener("click", () => {
    response.innerHTML = "<br>Yayyy 💖 I love you, Kavita! Happy Valentine's Day 😘";
    yesNoButtons.style.display = "none";
    // Trigger extra hearts celebration
    for (let i = 0; i < 10; i++) {
        setTimeout(createHeart, i * 100);
    }
});

// No button - move away when hovering or trying to click
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});

function moveNoButton() {
    const randomX = Math.random() * 200 - 100; // Random position between -100 and 100
    const randomY = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Create a single floating heart element
function createHeart() {
    const heart = document.createElement("span");
    heart.textContent = "\u2764️";

    // Random horizontal starting position
    heart.style.left = Math.random() * 100 + "vw";

    // Random size between 12px and 32px
    const size = Math.random() * 20 + 12;
    heart.style.fontSize = size + "px";

    // Random animation duration between 4s and 7s
    const duration = Math.random() * 3 + 4;
    heart.style.animationDuration = duration + "s";

    // Position absolute for floating
    heart.style.position = "absolute";

    heartsContainer.appendChild(heart);

    // Remove the heart after it finishes floating
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create hearts every 300ms
setInterval(createHeart, 300);
