import styles from "./Video.module.css";
import Button from "./Button";
import p1 from "../images/thumb1.jpg";
function Video({ id, title, channelName, views, time, dispatch, editVideo }) {
	let handleDelete = () => {
		let decision = window.confirm("Are you sure to Delete this video");
		if (decision) {
			dispatch({ type: "DELETE", payload: id });
		}
	};

	let handleEdit = () => {
		editVideo(id);
	};

	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<img className={styles.thumbnail} src={p1} alt="" />
			</div>
			<div>
				<p className={styles.title}>{title}</p>
				<p className={styles.channelName}>{channelName}</p>
				<p className={styles.views}>
					{" "}
					{views} Views <span>.</span> {time}{" "}
				</p>
			</div>
			<br />
			<div className={styles.buttons}>
				<Button />
				<div onClick={handleEdit} className={styles.icons}>
					🖊
				</div>
				<div onClick={handleDelete} className={styles.icons}>
					❌
				</div>
			</div>
		</div>
	);
}

export default Video;
