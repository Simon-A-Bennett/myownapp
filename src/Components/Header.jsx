import React from "react";
import "../Styles/Header.css";
import planet from "../assets/img/planet.jpg";
const Header = () => {
	return (
		<header>
			<div className="header">
				<img src={planet} alt="planet" />
				<h1>The Universe is under no obligation to make sense to you.</h1>
			</div>
      <hr className="my-hr"/>
		</header>
	);
};

export default Header;
