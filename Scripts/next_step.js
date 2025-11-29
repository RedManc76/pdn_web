
document.addEventListener("DOMContentLoaded", () => {
    const videoPlayer = document.getElementById('videoPlayer');

    // Detect mobile devices
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(navigator.userAgent);

    if (!isMobile) {
        // Change video for mobile
        videoPlayer.src = "../videos/philosphy.mp4";
    }
});