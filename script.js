const video = document.querySelector("#choose-video");
const button = document.querySelector("#choose-vid_play_btn");
const playIcon = document.querySelector(".play-icon");
const pauseIcon = document.querySelector(".pause-icon");

button.addEventListener("click", () => {
    if (video.paused) {
        video.play();

        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
    } else {
        video.pause();

        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
    }
});