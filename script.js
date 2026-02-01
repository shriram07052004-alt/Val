// Get elements from the page
const button = document.getElementById("valentineBtn");
const response = document.getElementById("response");
const heartsContainer = document.querySelector(".hearts");

// When the button is clicked, show the loving message and hide the button
button.addEventListener("click", () => {
    response.textContent = "Yayyy \ud83d\udc96 I love you, Kavita! Happy Valentine's Day \ud83d\ude18";
    button.style.display = "none";
});

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

    // Slight random horizontal drift
    const drift = Math.random() * 40 - 20; // -20px to 20px
    heart.style.setProperty("--drift", drift + "px");

    heartsContainer.appendChild(heart);

    // Remove the heart after it finishes floating
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create hearts every 300ms
setInterval(createHeart, 300);
