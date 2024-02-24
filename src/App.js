import "./App.css";
import Border from "./components/Border";
import Video from "./components/Video";
import data from './data/videos.js';
import p1 from "./images/thumb1.jpg";
import List from "./components/List";
import Button from './components/Button.js'


function App() {

	let clickHandler = (msg)=>{
		alert(msg);
	}
	let items = ["Apple","Banana","Mango","Lichi","Pomegranate","Grapes"];
	return (
		<div className="container">
			<h2>Videos</h2>
			<div className="videoContainer">
				{data.map(d=><Video
					thumbnail={p1}
					title={d.title}
					channelName={d.channelName}
					views={d.views}
					time={d.time}
				/>)}
			</div>

			<Button message="Play Video" onClick={clickHandler}>Play Button</Button>
			<Button message="Pause Video" onClick={clickHandler}>Pause Button</Button>

			<br />

			<Border> <List  items={items}/></Border>



		</div>
	);
}

export default App;
