import './videoItem.css'
import React from 'react'


const VideoItem = ({video}) => {
    return (
        <div className="videoItem item">
            <img className="ui image" src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
                <div className="description">
                {video.snippet.description}
                </div>
            </div>
        </div>
    ) 
}

export default VideoItem