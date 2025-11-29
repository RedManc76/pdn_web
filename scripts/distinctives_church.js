/* Load correct video on page load */
document.addEventListener("DOMContentLoaded", () => {
    const videoPlayer = document.getElementById('videoPlayer');

    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(navigator.userAgent);

    function getVideoPath(baseName) {
        return isMobile
            ? `../videos/${baseName}_mobile.mp4`
            : `../videos/${baseName}.mp4`;
    }

    videoPlayer.src = getVideoPath("spiritual_church");
});