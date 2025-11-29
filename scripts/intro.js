const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(navigator.userAgent);

const videos = [
  { title: "Necessity", src: "necessity" },
  { title: "Motivation", src: "motivation" },
  { title: "Concept", src: "concept" },
  { title: "Distinctive 1", src: "distinctive_1" },
  { title: "Distinctive 2", src: "distinctive_2" },
  { title: "Distinctive 3", src: "distinctive_3" },
  { title: "Charge", src: "charge" }
];

const videoPlayer = document.getElementById('videoPlayer');
const playOverlay = document.getElementById('playOverlay');
const videoListContainer = document.getElementById('videoList');

let currentVideoIndex = 0;

function getVideoPath(baseName) {
  if (isMobile) {
    return `../videos/${baseName}_mobile.mp4`;
  }
  return `../videos/${baseName}.mp4`;
}

function setVideo(index) {
  currentVideoIndex = index;
  const baseName = videos[index].src;
  videoPlayer.src = getVideoPath(baseName);
  videoPlayer.pause();
  updateOverlay();
  updateList();
}

function updateList() {
  videoListContainer.innerHTML = '';
  videos.forEach((video, index) => {
    const card = document.createElement('div');
    card.className = 'video-card';
    if (index === currentVideoIndex) card.classList.add('current');
    else if (index === currentVideoIndex + 1) card.classList.add('next');

    card.textContent = video.title;
    card.onclick = () => setVideo(index);

    videoListContainer.appendChild(card);
  });
}

videoPlayer.addEventListener('ended', updateOverlay);

// Initialize
updateList();

document.addEventListener("DOMContentLoaded", () => {
  const videoPlayer = document.getElementById('videoPlayer');

  const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(navigator.userAgent);

  function getVideoPath(baseName) {
    return isMobile
      ? `../videos/${baseName}_mobile.mp4`
      : `../videos/${baseName}.mp4`;
  }

  // Load correct video on first load
  videoPlayer.src = getVideoPath("necessity");
});
