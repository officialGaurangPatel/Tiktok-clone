import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div class="Video">
      <video
        onClick={handleVideoPress}
        ref={videoRef}
        className="Video__Player"
        loop
        alt="Video"
        src="https://www.statuslagao.com/whatsapp/videos/mahakal/mahadev-status-video-237.mp4"
      />
      <VideoFooter />
      {/* <videoSidebar/> */}
    </div>
  );
};

export default Video;
