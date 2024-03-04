import styles from "./AddVideo.module.css";
function AddVideo({ addVideoHandler }) {
	let initialValue = {
		title: "",
		views: "",
		channelName: "Your Channel Name",
		time: "0 minutes ago",
	};

	function handleSubmit(e) {
		e.preventDefault();

		let form = e.target.parentElement;
		let newTitle = form.title.value;
		let newViews = form.views.value;
		if (newTitle === "" || newViews === "") {
			alert("Please Enter Valid Input values");
			return;
		}
		let obj = { ...initialValue, title: newTitle, views: newViews };
		addVideoHandler(obj);
		form.title.value = "";
		form.views.value = "";
	}

	return (
		<form className={styles.addVideoForm}>
			<input
				className={styles.addVideoInputs}
				type="text"
				name="title"
				placeholder="Enter Video Title"
			/>
			<input
				className={styles.addVideoInputs}
				type="text"
				name="views"
				placeholder="Enter Views"
			/>

			<button
				className={styles.addVideoBtn}
				onClick={handleSubmit}
				type="submit">
				Add
			</button>
		</form>
	);
}

export default AddVideo;
