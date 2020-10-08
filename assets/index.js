import MediaPlayer from "./mediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");

const btnPlay = document.querySelector("button");
const btnMuted = document.getElementById("muteButton");

const player = new MediaPlayer({ element: video, plugins: [new AutoPlay()] });

btnPlay.onclick = () => {
  player.togglePlay();
};

btnMuted.onclick = () => {
  player.toggleMute();
};
