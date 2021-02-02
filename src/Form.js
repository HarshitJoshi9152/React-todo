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
		const { title: name, note: job } = this.state;

		return (
			<div className="form">
			<FormHeader></FormHeader>
			<form>
				{/* <label htmlFor="name">Name</label> */}
				<input
					placeholder="name"
					type="text"
					name="title"
					id="name"
					value={name}
					onChange={this.handleChange}
				/>
				{/* <label htmlFor="job">Job</label> */}
				<textarea
					placeholder="job"
					type="text"
					name="note"
					id="job"
					value={job}
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
