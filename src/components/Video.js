import './Video.css'
function Video({title,channelName,views,time,thumbnail}){
    return (
        <div className="card">
            <div className="imgContainer">
                <img src={thumbnail} alt="" />
            </div>
            <div>
                <p className="title">{title}</p>
                <p className="channelName">{channelName}</p>
                <p className="views"> {views} Views <span>.</span> {time} </p>
            </div>
        </div>
    );
}

export default Video;