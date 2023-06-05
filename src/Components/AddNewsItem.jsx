import { useState } from "react";
import "../Styles/AddNewsItem.css";

const AddNewsItem = ({json}) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleBodyChange = (e) => {
		setBody(e.target.value);
	};

  const addNews = () => {
    json
  }

	return (
		<div className="addnews">
			<h3>Add News</h3>
			<form>
				<input
					onChange={handleTitleChange}
					placeholder="Enter Title"
					value={title}
					type="text"
					name="title"
				></input>
				<input type="file"></input>
				<textarea
					onChange={handleBodyChange}
					placeholder="Enter text"
					value={body}
					name="body"
					id=""
					cols="30"
					rows="10"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default AddNewsItem;
