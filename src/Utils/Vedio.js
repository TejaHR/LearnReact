import React from "react";
import ReactPlayer from "react-player";
import "../styling/videoplayer.scss"

const VedioPlayerComp = ({ vedioParams = {} }) => {
  return (
    <div className="videoplayer-container">
      <ReactPlayer url={vedioParams.url} className="react-player"/>
    </div>
  );
};

export default VedioPlayerComp;
