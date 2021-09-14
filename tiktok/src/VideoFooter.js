import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = () => {
  return (
    <div className="video__footer">
      <div className="videoFooter__text">
        <h3>@GaurangPatel</h3>
        <p>Caption</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>i am song</p>
              </>
            )}
          </Ticker>
        </div>
      </div>

      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
};

export default VideoFooter;
