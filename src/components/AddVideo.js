import { useEffect, useState } from "react";

import styles from "./AddVideo.module.css";
function AddVideo({ dispatch, editableVideo, setEditableVideo }) {
	let initialValue = {
		title: "",
		views: "",
		channelName: "Your Channel Name",
		time: "0 minutes ago",
	};
	const [title, setTitle] = useState("");
	const [views, setViews] = useState("");

	let handleTitleChange = (e) => {
		setTitle(e.target.value);
	};
	let handleViewsChange = (e) => {
		setViews(e.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();

		let obj;
		if (title === "" || views === "") {
			alert("Please Enter Valid Input values");
			return;
		}

		if (editableVideo) {
			obj = { ...editableVideo, title: title, views: views };
			dispatch({ type: "UPDATE", payload: obj });
			setEditableVideo("");
		} else {
			obj = { ...initialValue, title: title, views: views };
			dispatch({ type: "ADD", payload: obj });
		}

		setTitle("");
		setViews("");
	}

	useEffect(() => {
		setTitle(editableVideo.title);
		setViews(editableVideo.views);
	}, [editableVideo]);

	return (
		<form id="form" className={styles.addVideoForm}>
			<input
				className={styles.addVideoInputs}
				type="text"
				placeholder="Enter Video Title"
				// name="title"
				value={title}
				onChange={handleTitleChange}
			/>
			<input
				className={styles.addVideoInputs}
				type="text"
				placeholder="Enter Views"
				// name="views"
				value={views}
				onChange={handleViewsChange}
			/>

			<button
				className={styles.addVideoBtn}
				onClick={handleSubmit}
				type="submit">
				{editableVideo ? "Edit" : "Add"}
			</button>
		</form>
	);
}

export default AddVideo;
