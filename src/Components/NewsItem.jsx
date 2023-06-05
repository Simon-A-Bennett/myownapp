import React from "react";

import "../Styles/NewsItem.css";

import AddNewsItem from "./AddNewsItem";
import JSON from '../DB.json'

const NewsItem = () => {
	return (
		<div className="newsitem">
			<br />
			<br />
			<br />
			<hr className="my-hr" />
			<h1>The Latest News from Space</h1>
			{JSON.map((item, id) => (
				<div key={id}>
					<h2>
						<u>{item.title}</u>
					</h2>
					<img src={item.picture} />
					<p>{item.body}</p>
					<hr className="my-hr" />
				</div>
			))}
			<AddNewsItem  json={JSON}/>
		</div>
	);
};

export default NewsItem;
