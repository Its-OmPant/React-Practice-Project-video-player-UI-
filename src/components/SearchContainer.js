import VideoList from "./VideoList";
import styles from "./SearchContainer.module.css";
function SearchContainer({ searchResult, setIsSearching }) {
	let btnClickHandler = () => {
		setIsSearching(false);
	};
	return (
		<>
			<div className={styles.searchContainerNav}>
				<button
					className={styles.searchContainerNavButton}
					onClick={btnClickHandler}>
					⬅
				</button>
				<h2>Matching Items...</h2>
			</div>
			{searchResult.length !== 0 ? (
				<VideoList className="videoContainer" videos={searchResult} />
			) : (
				<div className={styles.errorContainer}>
					<h2>No result found 😕 Try searching with different keyword...</h2>
				</div>
			)}
		</>
	);
}

export default SearchContainer;
