import React, { Component } from "react";
import './form.css'
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

	submitForm = (e) => {
		e.preventDefault()
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
	};

	render() {
		const { title, note } = this.state;

		return (
			<div className="form">
			<FormHeader></FormHeader>
			<form>
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
					onChange={this.handleChange}
				/>
				<input type="button" onSubmit={this.submitForm} onClick={this.submitForm} value="Add task"/>
			</form>
			</div>
		);
	}
}

function FormHeader(prosp) {
	return (
		<h2>add a new entry</h2>
	)
}

export default Form;
