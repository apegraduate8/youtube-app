import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>search something</div>;
    }

    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui segment">
                <div className="ui embed">
                    <iframe title="video player" src={ videoSrc }/>
                </div>
                <h4 className="ui header">{ video.snippet.title }</h4>
                <p>{ video.snippet.description }</p>
            </div>
        </div>
    );
}

export default VideoDetail;
