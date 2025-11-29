    const video = document.getElementById('videoPlayer');
    const overlay = document.getElementById('playOverlay');

    function updateOverlay() {
      overlay.style.display = video.paused ? 'flex' : 'none';
    }

    // Initial overlay state
    updateOverlay();

    // Toggle play/pause on click anywhere in the video box
    video.parentElement.addEventListener('click', () => {
      if(video.paused) {
        video.play();
      } else {
        video.pause();
      }
      updateOverlay();
    });

    // Also update overlay when video ends
    video.addEventListener('ended', updateOverlay);