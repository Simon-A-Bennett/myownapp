import React, { useState, useEffect } from "react";
import "../Styles/Earth.css";
import darkEarth from "../assets/img/earth-dark.jpg";
import lightEarth from "../assets/img/earth-light.jpg";
import Timer from "./Timer";

// const imageToggle = { seconds };

const Earth = () => {
	const [seconds, setSeconds] = useState(0);
	const [active, setActive] = useState(false);

	const startToggle = () => {
		setActive(!active);
	};

	const reset = () => {
		setSeconds(0);
		setActive(false);
	};

	useEffect(() => {
		let interval = null;
		if (active) {
			interval = setInterval(() => {
				setSeconds((seconds) => seconds + 1);
			}, 800);
		} else if (!active && seconds>= 8) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [active, setActive]);

	return (
		<div className="earth">
			<p className="earth__desc">
				If you were to turn the Sun off it would take 8 minutes before the Earth
				went dark and if you were to switch it back on again it would take
				another 8 minutes before the light would reach us again.
			</p>
			<Timer
				seconds={seconds}
				active={active}
				startToggle={startToggle}
				reset={reset}
			/>
			<img src={seconds <= 7 ? darkEarth : lightEarth} />
		</div>
	);
};

export default Earth;
