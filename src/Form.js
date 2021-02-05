import React, { Component } from "react";
import './form.css'

// functional implementation
// https://pastebin.com/ABRZZaYc

class Form extends Component {
	initialState = {
		title: "",
		note: ""
	};

	state = this.initialState;

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	submitForm = (event) => {
		event.preventDefault();
		console.log("submit", event);
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
	};

	render() {
		const { title, note } = this.state;

		return (
			<div className="form">
			<FormHeader></FormHeader>
			<form onSubmit={this.submitForm}>
				{/* <label htmlFor="name">Name</label> */}
				<input
					placeholder="title"
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={this.handleChange}
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
					onChange={this.handleChange}
				/>
				<button type="button" onClick={this.submitForm} onSubmitCapture={this.submitForm}> Add Task</button>
			</form>
			</div>
		);
	}
}

function FormHeader() {
	return <h2>add a new entry</h2>;
}

export default Form;
