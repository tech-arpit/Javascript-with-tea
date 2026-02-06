// Get elements
const video = document.getElementById('bgVideo');
const spotlight = document.querySelector('.spotlight');
const startOverlay = document.getElementById('startOverlay');
const startBtn = document.getElementById('startBtn');
const soundBtn = document.getElementById('soundBtn');
const volumeSlider = document.getElementById('volumeSlider');

// 1. START BUTTON - Handle sound and autoplay
startBtn.addEventListener('click', function() {
    // Start video with sound
    video.muted = false;
    video.volume = 0.5;
    volumeSlider.value = 0.5;
    
    // Play video
    video.play().then(() => {
        console.log("Video playing with sound");
        startOverlay.style.display = 'none';
        soundBtn.textContent = '🔊 Mute';
    }).catch(error => {
        console.log("Autoplay failed, user interaction required:", error);
        alert("Click anywhere on the page to start video with sound");
        startOverlay.style.display = 'none';
    });
});

// 2. SPOTLIGHT MOVEMENT
document.addEventListener('mousemove', function(e) {
    // Get mouse position as percentages
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    // Update spotlight position
    spotlight.style.setProperty('--mouse-x', x + '%');
    spotlight.style.setProperty('--mouse-y', y + '%');
});

// 3. SOUND CONTROLS
soundBtn.addEventListener('click', function() {
    video.muted = !video.muted;
    soundBtn.textContent = video.muted ? '🔇 Unmute' : '🔊 Mute';
});

volumeSlider.addEventListener('input', function() {
    video.volume = volumeSlider.value;
    video.muted = false;
    soundBtn.textContent = '🔊 Mute';
});

// 4. KEYBOARD SHORTCUTS
document.addEventListener('keydown', function(e) {
    switch(e.key.toLowerCase()) {
        case 'm': // Mute/Unmute
            video.muted = !video.muted;
            soundBtn.textContent = video.muted ? '🔇 Unmute' : '🔊 Mute';
            break;
            
        case ' ': // Space - Play/Pause
            if (video.paused) video.play();
            else video.pause();
            break;
            
        case 'arrowup': // Volume up
            video.volume = Math.min(video.volume + 0.1, 1);
            volumeSlider.value = video.volume;
            video.muted = false;
            soundBtn.textContent = '🔊 Mute';
            break;
            
        case 'arrowdown': // Volume down
            video.volume = Math.max(video.volume - 0.1, 0);
            volumeSlider.value = video.volume;
            break;
    }
});

// 5. INITIALIZE SPOTLIGHT AT CENTER
window.addEventListener('load', function() {
    spotlight.style.setProperty('--mouse-x', '50%');
    spotlight.style.setProperty('--mouse-y', '50%');
});

// // 6. DEBUGGING - Remove this in production
// console.log("Script loaded successfully");
// console.log("Elements found:");
// console.log("Video:", video);
// console.log("Spotlight:", spotlight);
// console.log("Start overlay:", startOverlay);