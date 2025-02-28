window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.container');

    // Smooth fade-out for preloader
    preloader.style.opacity = '0';

    setTimeout(() => {
        preloader.style.display = 'none'; // Hide preloader
        content.classList.add('show-content'); // Apply fade-in effect
    }, 2000); // Matches transition time
});
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
  function openWishesPopup() {
    document.getElementById("wishesPopup").style.display = "block";
}


function submitWish() {
    var name = document.getElementById("wisherName").value.trim();
    var message = document.getElementById("wisherMessage").value.trim();

    if (name === "" || message === "") {
        alert("Please enter both your name and your wishes.");
        return;
    }

    alert("Thank you, " + name + "! Your wish has been submitted.");
    
    // Optionally, clear the input fields after submission
    document.getElementById("wisherName").value = "";
    document.getElementById("wisherMessage").value = "";

    closeWishesPopup();
}

    function updateCountdown() {
      const weddingDate = new Date("May 27, 2025 19:00:00").getTime();
      const now = new Date().getTime();
      const timeLeft = weddingDate - now;

      document.getElementById("countdown-timer").innerHTML =
        timeLeft > 0 ? `${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} Days : ` +
        `${Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} Hours : ` +
        `${Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))} Minutes : ` +
        `${Math.floor((timeLeft % (1000 * 60)) / 1000)} Seconds` : "🎊 Happily Married 🎊";
    }
    setInterval(updateCountdown, 1000);
				  
				  function closeWishesPopup() {
        document.getElementById("wishesPopup").style.display = "none";
    }

    function showThankYouMessage() {
        setTimeout(function () {
            document.getElementById("thanksMessage").style.display = "block";
            setTimeout(closeWishesPopup, 2000);
        }, 1200);
    }

    document.getElementById("wishesForm").onsubmit = function () {
        showThankYouMessage();
        return true; // Allow Google Form to submit
    };
  window.onload = function () {
    var canvas = document.createElement("canvas");
    canvas.id = "fireworksCanvas";
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none"; // Prevents interaction

    const container = document.getElementById("fireworksCanvas");
    const fireworks = new Fireworks.default(container, {
        autoresize: true,
        opacity: 1.0,
        acceleration: 1,
        friction: 0.9,
        gravity: 1,
        particles: 250,
        traceLength: 1,
        traceSpeed: 10,
        explosion: 8,
        intensity: 30,
        flickering: 25,
        hue: { min: 100, max: 360 },
        delay: { min: 120, max: 120 }
    });

    fireworks.start();
};
    const ornamentsContainer = document.querySelector('.ornaments');
    for (let i = 0; i < 12; i++) {
        let img = document.createElement('img');
        img.src = 'ornament.png';
        img.alt = 'Decoration';
        ornamentsContainer.appendChild(img);
    }