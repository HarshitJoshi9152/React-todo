import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
	const header = { textAlign: "center" };

	const h1 = {
		margin: "none",
		padding: "none",
		fontSize: "2.8em",
		fontFamily: '"Droid Serif",Georgia,"Times New Roman",Times,serif'
	};

	return (
		<header className="hero" style={header}>
			<h1 style={h1}>
				<span class="green">Reactive</span>{" "}
				<span class="other">Notes</span>
			</h1>
			<Link to="/notes">View all notes</Link>
		</header>
	);
}

export default Header;
