// Initialize Variables
const startButton = document.getElementById('startButton');
const countdownElement = document.getElementById('countdown');
const birthdaySong = document.getElementById('birthdaySong');
let countdown = 3;

// Countdown and Confetti Launch
startButton.addEventListener('click', function() {
    startButton.style.display = 'none';
    countdownElement.style.display = 'block';
    document.getElementById('personalMessage').play();
    
    setTimeout(() => {
        const countdownInterval = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;

            if (countdown === 0) {
                clearInterval(countdownInterval);
                document.querySelector('.countdown-container').style.display = 'none';
                document.getElementById('mainContent').style.display = 'block';
                birthdaySong.play();
                launchConfetti();
                typeMessage();
            }
        }, 1000);
    }, 3000); // Delay for personal message
});

// Confetti Launch
function launchConfetti() {
    // Your confetti code here (e.g., Confetti.js configuration)
}

// Type Out Message
function typeMessage() {
    const message = "Happy moments shared with you, Clara, brighten each day...";
    let index = 0;
    const typedElement = document.getElementById('typedMessage');
    typedElement.style.display = 'block';

    const interval = setInterval(() => {
        typedElement.textContent += message[index++];
        if (index === message.length) clearInterval(interval);
    }, 100);
}

// Heart Particles Configuration
particlesJS("heartParticles", {
    particles: {
        number: { value: 20 },
        shape: { type: "heart" },
        color: { value: "#ff99cc" },
        size: { value: 8, random: true },
        move: { enable: true, speed: 1, direction: "top" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" } }
    }
});

// Sparkle Cursor
document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
});
