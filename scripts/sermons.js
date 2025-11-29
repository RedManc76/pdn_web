const videos = [
  { title: "Praying in the Spirit", id: "7wVTwlm_bbc" },
  { title: "Power of Prayer", id: "lOQHfD39rBA" },
  { title: "Pray and be alone with God", id: "aFKQaxcR9XU" }
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
