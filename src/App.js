import { useState } from "react";
import "./App.css";
import videoData from "./data/videos.js";
import VideoList from "./components/VideoList.js";
import AddVideo from "./components/AddVideo.js";
import Navbar from "./components/Navbar.js";
import SearchContainer from "./components/SearchContainer.js";

function App() {
	const [videos, setVideos] = useState(videoData);

	const [searchResult, setSearchResult] = useState([]);
	const [isSearching, setIsSearching] = useState(false);

	const [editableVideo, setEditableVideo] = useState("");

	let addVideo = (newVideo) => {
		newVideo.id = videos.length + 1;
		setVideos([...videos, newVideo]);
	};

	let deleteVideo = (id) => {
		setVideos(videos.filter((v) => v.id !== id));
	};

	let editVideo = (id) => {
		let selectedVideo = videos.find((v) => v.id === id);
		setEditableVideo(selectedVideo);
	};

	let updateVideo = (newVideo) => {
		let index = videos.findIndex((video) => video.id === newVideo.id);
		let newArray = [...videos];
		newArray.splice(index, 1, newVideo);
		setVideos(newArray);
	};

	let searchElement = (inputString) => {
		setIsSearching(true);
		let result = [];
		let searchStrings = inputString.trim().split(" ");
		searchStrings.forEach((str) => {
			result = videos.filter((v) => {
				return v.title.toLowerCase().includes(str.toLowerCase());
			});
		});
		setSearchResult(result);
	};

	return (
		<div className="container">
			<Navbar searchElement={searchElement} />
			{!isSearching ? (
				<>
					<AddVideo
						addVideoHandler={addVideo}
						updateVideo={updateVideo}
						editableVideo={editableVideo}
						setEditableVideo={setEditableVideo}
					/>
					<VideoList
						className="videoContainer"
						videos={videos}
						deleteVideo={deleteVideo}
						editVideo={editVideo}
					/>
				</>
			) : (
				<SearchContainer
					setIsSearching={setIsSearching}
					searchResult={searchResult}
				/>
			)}
		</div>
	);
}

export default App;
