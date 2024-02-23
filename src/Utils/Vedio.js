import React from "react";
import ReactPlayer from 'react-player'

const VedioPlayerComp = ({ vedioParams = {} }) => {

    return (
        <ReactPlayer url={vedioParams.url} />
    );
};

export default VedioPlayerComp;
