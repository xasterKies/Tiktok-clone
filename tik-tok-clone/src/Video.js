import React, { useRef } from 'react';
import "./Video.css";

function Video() {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
    if (play){
        videoRef.current.pause();

    }
    };
    

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