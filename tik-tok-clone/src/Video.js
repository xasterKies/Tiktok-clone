import React, { useRef } from 'react';
import "./Video.css";

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
    if (play){
        videoRef.current.pause();
    } else {
        videoRef.current.playing();
        setPlaying(true);
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