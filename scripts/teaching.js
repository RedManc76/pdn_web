const videos = [
  { title: "Lord Teach us to Pray", id: "E81KZZi40ts" },
  { title: "Ravenhill, Bounds, Spurgeon", id: "oR0XFkNKf3U" },
  { title: "The Puritan View of Prayer", id: "CHwq-lUhWc0" },
  { title: "The Cries of Anguish", id: "mziRM8hUa40" },
  { title: "Seek the Lord", id: "Z3n5rdusNg4" },
];

const videoPlayer = document.getElementById("videoPlayer");
const videoListContainer = document.getElementById("videoList");
const ytPlayer = document.getElementById('ytPlayer');
let currentVideoIndex = 0;

// Render video list
function renderVideoList() {
    videoListContainer.innerHTML = "";
    videos.forEach((video, index) => {
        const card = document.createElement("div");
        card.className = "video-card";
        card.textContent = video.title;
        if (index === currentVideoIndex) card.classList.add("current");

        card.onclick = () => {
            currentVideoIndex = index;
            setVideo(video.id);
        };

        videoListContainer.appendChild(card);
    });
}

// Set iframe src to new YouTube video
function setVideo(videoId) {
    ytPlayer.reset('ytPlayer', videoId);
    renderVideoList();
}

// Initialize
renderVideoList();
