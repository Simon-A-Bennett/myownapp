import React, { useState } from "react";
import "../Styles/Counter.css";

const Counter = () => {
	const [count, setCount] = useState(5.8);

	const initialCount = 5.8;
	const isDisabled = count <= 5.8 ? true : false;

	const addCountHandler = () => {
		setCount((prevCount) => {
			// Number((0 + 5.8).toFixed(1)) = 5.8
			return Number((prevCount + 5.8).toFixed(1));
		});
	};

	const minusCountHandler = () => {
		setCount((prevCount) => {
			// Number((0 + 5.8).toFixed(1)) = 5.8
			return Number((prevCount - 5.8).toFixed(1));
		});
	};

	return (
		<>
			<div className="counter">
				<p>One lightyear is 5.8 trillion miles</p>
				<p>( the distance that light travels in one year )</p>
				<p>{count} : trillion miles</p>
			</div>
			<div className="count">
				<button
					disabled={isDisabled}
					className="count-btn"
					onClick={minusCountHandler}
				>
					Minus one lightyear
				</button>
				<button className="count-btn" onClick={addCountHandler}>
					Add one lightyear
				</button>
				<button onClick={() => setCount(initialCount)} className="count-btn">
					Reset Count now
				</button>
			</div>
		</>
	);
};

export default Counter;
