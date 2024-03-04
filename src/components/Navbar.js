import { useState } from "react";
import styles from "./Navbar.module.css";
function Navbar({ searchElement }) {
	const [input, setInput] = useState("");

	let onSearchChange = (e) => {
		console.log(e.target.value);
		setInput(e.target.value);
	};

	let searchItem = () => {
		searchElement(input);
		setInput("");
	};
	let onEnter = (e) => {
		if (e.keyCode === 13) {
			searchElement(input);
			setInput("");
		}
	};

	return (
		<nav className={styles.navbar}>
			<h1>YouTube</h1>
			<div className={styles.search}>
				<input
					className={styles.searchInput}
					onChange={onSearchChange}
					onKeyDown={onEnter}
					type="text"
					placeholder="search something.."
					value={input}
				/>
				<div className={styles.searchVideoBtn} onClick={searchItem}>
					🔍
				</div>
			</div>
			<button className={styles.uploadVideoBtn}>Upload</button>
		</nav>
	);
}
export default Navbar;
