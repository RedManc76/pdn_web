const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(navigator.userAgent);

const videos = [
  { title: "Necessity", src: "necessity" },
  { title: "Motivation", src: "motivation" },
  { title: "Concept", src: "concept_church" },
  { title: "Distinctive 1", src: "distinctive_1" },
  { title: "Distinctive 2", src: "distinctive_2" },
  { title: "Distinctive 3", src: "distinctive_3" },
  { title: "Charge", src: "charge" }
];

const video = document.getElementById("videoPlayer");
const overlay = document.getElementById("playOverlay");
const spinner = document.getElementById("videoLoading");
const progressBar = document.getElementById("videoProgress");
const videoListContainer = document.getElementById("videoList");

let currentVideoIndex = 0;

// ------------------------
// Path builder
// ------------------------
function getVideoPath(name) {
  return isMobile
    ? `../videos/${name}_mobile.mp4`
    : `../videos/${name}.mp4`;
}

// ------------------------
// Overlay helper
// ------------------------
function updateOverlay() {
  overlay.style.display = video.paused ? "flex" : "none";
}

// ------------------------
// Reset UI for loading
// ------------------------
function resetLoadingUI() {
  overlay.classList.add("hidden");
  video.classList.add("loading");
  spinner.style.display = "block";
  progressBar.style.opacity = "0";
  progressBar.style.width = "0%";
}

// ------------------------
// Show progress bar after 1 second
// ------------------------
function showProgressBar() {
  progressBar.style.opacity = ".6";
  progressBar.style.width = "80%";
}

// ------------------------
// Load selected video
// ------------------------
function setVideo(index) {
  currentVideoIndex = index;
  const base = videos[index].src;

  resetLoadingUI();

  video.src = getVideoPath(base);
  video.load();
  video.pause(); // ensure paused before play

  updateList();
}

// ------------------------
// Build the list UI
// ------------------------
function updateList() {
  videoListContainer.innerHTML = "";

  videos.forEach((v, i) => {
    const card = document.createElement("div");
    card.className = "video-card";
    if (i === currentVideoIndex) card.classList.add("current");
    if (i === currentVideoIndex + 1) card.classList.add("next");

    card.textContent = v.title;
    card.onclick = () => setVideo(i);

    videoListContainer.appendChild(card);
  });
}

// ------------------------
// Update progress bar
// ------------------------
function updateProgress() {
  if (video.duration) {
    progressBar.value = (video.currentTime / video.duration) * 100;
  }
}

// ------------------------
// Events
// ------------------------

// Overlay click to toggle play/pause
video.parentElement.addEventListener("click", () => {
  if (video.paused) video.play();
  else video.pause();
  updateOverlay();
});

// Update overlay when video ends
video.addEventListener("ended", updateOverlay);

// Video loaded
video.addEventListener("loadeddata", () => {
  spinner.style.display = "none";
  video.classList.remove("loading");
  overlay.classList.remove("hidden");
  updateOverlay();
  progressBar.value = 0;

  // Show progress bar with delay
  setTimeout(showProgressBar, 1000);
});

// Update progress during playback
video.addEventListener("timeupdate", updateProgress);

// ------------------------
// Initial load
// ------------------------
setVideo(0);
updateList();
