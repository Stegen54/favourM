document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const countdownElement = document.getElementById('countdown');
    const birthdaySong = document.getElementById('birthdaySong');
    let countdown = 3;

    startButton.addEventListener('click', function() {
        startButton.style.display = 'none'; // Hide the button
        countdownElement.style.display = 'block'; // Show the countdown

        const countdownInterval = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;

            if (countdown === 0) {
                clearInterval(countdownInterval);
                document.querySelector('.countdown-container').style.display = 'none';
                document.getElementById('mainContent').style.display = 'block';
                birthdaySong.play();
                launchConfetti();
            }
        }, 1000);
    });
});

function launchConfetti() {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
