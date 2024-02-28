import { useState } from "react";
import "./App.css";
import videoData from "./data/videos.js";
import VideoList from './components/VideoList.js';
import AddVideo from "./components/AddVideo.js";

function App() {
	const [videos, setVideos] = useState(videoData);

	// let onBtnClick = ()=>{
	// 	setVideos([...videos, {
	// 		id:videos.length +1,
	// 		thumbnail: 4,
	// 		title: `New Video ${videos.length +1}`,
	// 		channelName: "Famous Youtuber",
	// 		views: "12M",
	// 		time: "11 Months ago",
	// 	}])
	// }

	let addVideo = (newVideo)=>{
		newVideo.id = videos.length+1;
		setVideos([...videos, newVideo]);
	}

	return (
		<div className="container">
			<AddVideo addVideoHandler={addVideo}></AddVideo>
			<VideoList className="videoContainer" videos={videos}></VideoList>
		</div>
	);
}

export default App;
