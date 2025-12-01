document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("videoPlayer");
    const overlay = document.getElementById("playOverlay");
    const spinner = document.getElementById("videoLoading");
    const progressBar = document.getElementById("videoProgress");

    function updateOverlay() {
        overlay.style.display = video.paused ? "flex" : "none";
    }

    function resetLoadingUI() {
        overlay.classList.add("hidden");
        video.classList.add("loading");
        if (spinner) spinner.style.display = "flex";
        progressBar.style.opacity = "0";
        progressBar.style.width = "0%";
    }

    function showProgressBar() {
        progressBar.style.opacity = ".6";
        progressBar.style.width = "80%";
    }

    function updateProgress() {
        if (video.duration) {
            progressBar.value = (video.currentTime / video.duration) * 100;
        }
    }

    // Initial load
    resetLoadingUI();
    updateOverlay();

    video.addEventListener("loadeddata", () => {
        video.classList.remove("loading");
        if (spinner) spinner.style.display = "none";
        overlay.classList.remove("hidden");
        updateOverlay();

        // 1 second delay before showing progress bar
        setTimeout(showProgressBar, 1000);
    });

    video.addEventListener("timeupdate", updateProgress);

    video.parentElement.addEventListener("click", () => {
        if (video.paused) video.play();
        else video.pause();
        updateOverlay();
    });

    video.addEventListener("ended", updateOverlay);
});
