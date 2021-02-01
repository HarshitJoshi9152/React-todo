import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./custom.css"
import App from "./App";

ReactDOM.render(<App></App>, document.querySelector("#root"));

console.log(
	<h1 className="new class">
	{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
		content<a href="#">child ?</a>
	</h1>
);
