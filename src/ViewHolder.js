import React from "react";
import "./ViewHolder.css"

function ViewHolder(props) {
	return (
		<div className="container">
			{props.children}
		</div>
	)
}

export default ViewHolder;