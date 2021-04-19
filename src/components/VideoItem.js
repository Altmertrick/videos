import React from 'react';
import  './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) =>{
    //const {video} = props; - destructuring

    return (
        <div className="video-item item">
            <img 
            alt={video.snippet.title}
            className="ui  image"
            src={video.snippet.thumbnails.medium.url}
            onClick={()=>{onVideoSelect(video)}}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            
            </div>
            
        </div>
    )
}

export default VideoItem;