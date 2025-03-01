// Preloader and Content Fade-in Effect
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const content = document.querySelector(".container");

    // Ensure content is hidden initially
    content.style.opacity = "0";
    content.style.display = "block"; // Keep it ready

    // Hide preloader and show content smoothly
    setTimeout(() => {
        if (preloader) {
            preloader.style.display = "none";
        }
        if (content) {
            content.style.transition = "opacity 2s ease-in-out"; // Smooth fade-in
            content.style.opacity = "1"; // Gradually appear
        }
    }, 3000); // Adjust delay if needed
});

// Toggle Background Audio
function toggleAudio() {
    var audio = document.getElementById("myAudio");
    var button = document.querySelector(".floating-button");

    if (audio.paused) {
        audio.play();
        button.innerHTML = "🔊"; // Sound On Icon
    } else {
        audio.pause();
        button.innerHTML = "🔇"; // Muted Icon
    }
}

// Open Wishes Popup
function openWishesPopup() {
    document.getElementById("wishesPopup").style.display = "block";
}

// Submit Wish Form
function submitWish() {
    var name = document.getElementById("wisherName").value.trim();
    var message = document.getElementById("wisherMessage").value.trim();

    if (name === "" || message === "") {
        alert("Please enter both your name and your wishes.");
        return;
    }

    // Clear input fields after submission
    document.getElementById("wisherName").value = "";
    document.getElementById("wisherMessage").value = "";

    closeWishesPopup();
}

// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date("May 27, 2025 19:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    document.getElementById("countdown-timer").innerHTML =
        timeLeft > 0
            ? `${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} Days : ` +
              `${Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} Hours : ` +
              `${Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))} Minutes : ` +
              `${Math.floor((timeLeft % (1000 * 60)) / 1000)} Seconds`
            : "🎊 Happily Married 🎊";
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Close Wishes Popup
function closeWishesPopup() {
    document.getElementById("wishesPopup").style.display = "none";
}

// Show Thank You Message After Form Submission
function showThankYouMessage() {
    setTimeout(function () {
        document.getElementById("thanksMessage").style.display = "block";
        setTimeout(closeWishesPopup, 1200);
    }, 1200);
}

// Handle Form Submission
document.getElementById("wishesForm").onsubmit = function () {
    showThankYouMessage();
    return true; // Allow Google Form to submit
};

// Fireworks Effect on Page Load
window.onload = function () {
    // Create and append the fireworks canvas
    var canvas = document.createElement("canvas");
    canvas.id = "fireworksCanvas";
    document.body.appendChild(canvas);

    // Style the canvas
    Object.assign(canvas.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        pointerEvents: "none", // Prevent interactions
        zIndex: "-1" // Ensure it's in the background
    });

    // Resize canvas dynamically
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize Fireworks
    const container = document.getElementById("fireworksCanvas");
    const fireworks = new Fireworks.default(container, {
        autoresize: true,
        opacity: 150,
        acceleration: 1,
        friction: 0.9,
        gravity: 1,
        particles: 250,
        traceLength: 1,
        traceSpeed: 10,
        explosion: 8,
        intensity: 30,
        flickering: 25,
        hue: { min: 180, max: 360 },
        delay: { min: 120, max: 120 }
    });

    fireworks.start();
};

// Dynamically Add Ornaments
const ornamentsContainer = document.querySelector('.ornaments');
for (let i = 0; i < 12; i++) {
    let img = document.createElement('img');
    img.src = 'ornament.png';
    img.alt = 'Decoration';
    ornamentsContainer.appendChild(img);
}