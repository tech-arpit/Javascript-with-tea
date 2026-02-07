// 1. Get elements
const spotlight = document.querySelector('.spotlight');
const video = document.getElementById('myVideo');
const soundBtn = document.getElementById('soundBtn');

// 2. Move spotlight with mouse
document.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    spotlight.style.background = `radial-gradient(300px at ${x}px ${y}px, transparent, black)`;
});

// 3. Toggle sound
soundBtn.addEventListener('click', function() {
    video.muted = !video.muted;
    soundBtn.textContent = video.muted ? '🔇 Unmute' : '🔊 Mute';
});

// 4. Optional: Click anywhere to play if paused
document.addEventListener('click', function() {
    if (video.paused) {
        video.play();
    }
});