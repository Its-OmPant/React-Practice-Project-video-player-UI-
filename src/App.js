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

	let addVideo = (newVideo) => {
		newVideo.id = videos.length + 1;
		setVideos([...videos, newVideo]);
	};

	let deleteVideo = (id) => {
		setVideos(videos.filter((v) => v.id !== id));
	};

	let searchElement = (inputString) => {
		setIsSearching(true);
		let result = [];
		let searchStrings = inputString.trim().split(" ");
		console.log(searchStrings);
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
					<AddVideo addVideoHandler={addVideo} />
					<VideoList
						className="videoContainer"
						videos={videos}
						deleteVideo={deleteVideo}
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
