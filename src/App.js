import { useReducer, useState } from "react";
import "./App.css";
import videoData from "./data/videos.js";
import VideoList from "./components/VideoList.js";
import AddVideo from "./components/AddVideo.js";
import Navbar from "./components/Navbar.js";
import SearchContainer from "./components/SearchContainer.js";

function App() {
	function videoReducer(videos, action) {
		switch (action.type) {
			case "ADD":
				return [...videos, { ...action.payload, id: videos.length + 1 }];

			case "DELETE":
				return videos.filter((v) => v.id !== action.payload);
			case "UPDATE":
				let index = videos.findIndex((video) => video.id === action.payload.id);
				let newArray = [...videos];
				newArray.splice(index, 1, action.payload);
				return newArray;
			default:
				return videos;
		}
	}

	const [videos, dispatch] = useReducer(videoReducer, videoData);

	const [editableVideo, setEditableVideo] = useState("");

	const [searchResult, setSearchResult] = useState([]);
	const [isSearching, setIsSearching] = useState(false);

	let editVideo = (id) => {
		let selectedVideo = videos.find((v) => v.id === id);
		setEditableVideo(selectedVideo);
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
						dispatch={dispatch}
						editableVideo={editableVideo}
						setEditableVideo={setEditableVideo}
					/>
					<VideoList
						className="videoContainer"
						videos={videos}
						dispatch={dispatch}
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
