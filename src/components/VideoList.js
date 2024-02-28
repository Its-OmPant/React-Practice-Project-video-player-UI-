import Video from './Video.js';
function VideoList({videos, className}){
    return <div className={className}>
    {videos.map((v) => (
        <Video
            key={v.id}
            title={v.title}
            channelName={v.channelName}
            views={v.views}
            time={v.time}
        />
    ))}
</div>
}

export default VideoList;