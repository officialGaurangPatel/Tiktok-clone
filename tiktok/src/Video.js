import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div class="Video">
      <video
        className="Video__Container"
        loop
        alt="Video"
        src="https://www.statuslagao.com/whatsapp/videos/mahakal/mahadev-status-video-237.mp4"
      />
    </div>
  );
};

export default Video;
