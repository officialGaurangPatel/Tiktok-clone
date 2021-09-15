import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({ url, channel, description, song, likes, shares, message }) => {
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
        src={url}
      />
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} message={message} />
    </div>
  );
};

export default Video;
