import React, { useRef } from 'react';
import "./Video.css";

function Video() {
    const videoRef = useRef(null);
    

        <div className="video">
        <video className="video__player" 
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://vm.tiktok.com/ZSPgqUJf/" className="video"></video>
        {/* <VideoFooter /> */}
        {/* <VideoSidebar /> /> */}
        </div>
    
}

export default Video;