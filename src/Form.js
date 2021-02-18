import React, { useState } from "react";
import './form.css'

// functional implementation
// https://pastebin.com/ABRZZaYc

function Form(props) {

	const initialState = {
		title: "",
		note: ""
	};

	const [state, setState] = useState(initialState);

	const handleChange = (event) => {
		const { name, value } = event.target;
		// if (value.trim() === "") return null;
		let obj = {...state}
		obj[name] = value
		setState(obj)
	};
	
	const submitForm = (event) => {
		event?.preventDefault();
		if (state.title === "" || state.note === "") {
			return null;
		}
		props.handleSubmit(state);
		setState(initialState);
	};
	
	const keyDown = (event) => {
		// to implement ctrl + Enter to submit form.
		// else: npm install react-hotkeys-hook
		if (event.ctrlKey === true && event.key === "Enter") {
			submitForm()
			event.target.blur()
		}
	}

	const { title, note } = state;
	return (
		<div className="form">
		<FormHeader></FormHeader>
		<form onSubmit={submitForm}>
			{/* <label htmlFor="name">Name</label> */}
			<input
				placeholder="title"
				type="text"
				name="title"
				id="title"
				value={title}
				onChange={handleChange}
			/>
			{/* <label htmlFor="note">Job</label> */}
			<textarea
				placeholder="note"
				type="text"
				name="note"
				id="note"
				size="80"
				value={note}
				spellCheck="false"
				onChange={handleChange}
				onKeyDown={keyDown}
			/>
			<button type="button" onClick={submitForm} onSubmitCapture={submitForm}> Add Task</button>
		</form>
		</div>
	);
}

function FormHeader() {
	return <h2>add a new entry</h2>;
}

export default Form;
