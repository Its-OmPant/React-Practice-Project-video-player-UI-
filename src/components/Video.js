import './Video.css'
import Button from './Button';
import p1 from '../images/thumb1.jpg'
function Video({title,channelName,views,time}){
    return (
        <div className="card">
            <div className="imgContainer">
                <img src={p1} alt="" />
            </div>
            <div>
                <p className="title">{title}</p>
                <p className="channelName">{channelName}</p>
                <p className="views"> {views} Views <span>.</span> {time} </p>
            </div>
            <br />
            <div className='buttons'>
            <Button />
            </div>
        </div>
    );
}

export default Video;