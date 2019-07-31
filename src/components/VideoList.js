import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos}) => {
    const rendList = videos.map(video => {
        return <VideoItem video={video} />
    })
    return <div className="ui relaxed divided list">{rendList}</div>
}

export default VideoList