import React, { Component } from "react";

class Form extends Component {
	initialState = {
		name: "",
		job: ""
	};

	state = this.initialState;

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	submitForm = () => {
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
	};

	render() {
		const { name, job } = this.state;

		return (
			<form>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={this.handleChange}
				/>
				<label htmlFor="job">Job</label>
				<input
					type="text"
					name="job"
					id="job"
					value={job}
					onChange={this.handleChange}
				/>
				<input type="button" onClick={this.submitForm} value="👉 Click me 👈"/>
			</form>
		);
	}
}

export default Form;
