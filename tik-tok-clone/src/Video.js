import React, { useRef, useState } from 'react';
import "./Video.css";
import  VideoFooter from "./VideoFooter";

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
    if (playing){
        videoRef.current.pause();
    } else {
        videoRef.current.play();
        setPlaying(true);
    }
    };
    
    return (
        <div className="video">
        <video className="video__player" 
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://www.tiktok.com/@larissadeffo/video/6866943467520609537?_d=secCgsIARCbDRgBIAMoARI%2BCjzC1oi3Yjr%2FE6rpJt3GxWACHieCVnLJOcV7F5esNpxqSfgtvLA3l5nErnxXZg%2F71JqyFOQzFopL%2FSidcIoaAA%3D%3D&language=en&preview_pb=0&sec_user_id=MS4wLjABAAAAdhX--l4iKv-ZZJKEY2TKNGmRIkEE0Gd_TJDY1BE-axWVIpH2WrpkYnK61vZr2ovR&share_item_id=6866943467520609537&share_link_id=C09B044D-3DE6-41AD-AA9A-AFEA329052C7&timestamp=1599372540&tt_from=copy&u_code=da4cdmmjfgfk30&user_id=6775952522306831366&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_m" className="video">
        </video>
        <VideoFooter/>

        {/* <VideoSidebar /> /> */}
        </div>
    );
    
}

export default Video;