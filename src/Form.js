import React, { Component } from "react";

class Form extends Component {
	initialState = {
		items:["", ""]
	};

	state = this.initialState;

	componentDidMount = () => {
		console.log(this.state)
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			items: [name, value]
		});
		console.log("debugging\n", this.state);
		console.log("debugging\n", { name, value });
	};

	submitForm = () => {
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
	};

	render() {
		const [ name, job ] = this.state.items.length ? this.state.items : ["",""];
		console.log(name, job)
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
				<input type="button" onClick={this.submitForm} value="Click me 👉👈"/>
			</form>
		);
	}
}

export default Form;
