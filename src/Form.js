import React, { Component } from "react";
import './form.css'
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
			<div className="form">
			<FormHeader></FormHeader>
			<form>
				{/* <label htmlFor="name">Name</label> */}
				<input
					placeholder="name"
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={this.handleChange}
				/>
				{/* <label htmlFor="job">Job</label> */}
				<textarea
					placeholder="job"
					type="text"
					name="job"
					id="job"
					value={job}
					onChange={this.handleChange}
				/>
				<input type="button" onClick={this.submitForm} value="Add task"/>
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
