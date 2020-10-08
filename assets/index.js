import MediaPlayer from "./mediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const btnPlay = document.querySelector("button");

const player = new MediaPlayer({ element: video, plugins: [new AutoPlay()] });
btnPlay.onclick = () => {
  player.togglePlay();
};
