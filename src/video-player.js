import "./styles.css";
import "cloudinary-video-player";
import cloudinary from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.min.css";

const cld = cloudinary.Cloudinary.new({ cloud_name: "demo" });
const demoplayer = cld.videoPlayer("doc-player").width(600);
var videoSource = "docs/hotel";
var liveControls = document.getElementsByClassName("vjs-live-control");

demoplayer.source(videoSource);
demoplayer.on("play", function () {
  liveControls[0].classList.remove("vjs-hidden");
  demoplayer.currentTime(
    offsetTimeFromServer() < demoplayer.duration() ? offsetTimeFromServer() : 5
  ); // Set video time to offset from server.
  // For demo purposes, if offset is greater than the duration of the video, start from 5 seconds.
});

let offsetTimeFromServer = function () {
  var startTime = 1623765482; //Unix timestamp for event start time. Update with value close to time now.
  var timeNow = Math.floor(Date.now() / 1000);
  return timeNow - startTime;
};
