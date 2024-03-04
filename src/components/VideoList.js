import Video from "./Video.js";
function VideoList({ videos, className, deleteVideo }) {
	return (
		<div className={className}>
			{videos.map((v) => (
				<Video
					deleteVideo={deleteVideo}
					key={v.id}
					id={v.id}
					title={v.title}
					channelName={v.channelName}
					views={v.views}
					time={v.time}
				/>
			))}
		</div>
	);
}

export default VideoList;
