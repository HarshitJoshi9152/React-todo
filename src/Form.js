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
		if (value.trim() === "") return null;
		this.setState({
			[name]: value
		});
	};

	submitForm = (event) => {
		event.preventDefault();
		if (JSON.stringify(this.state) === JSON.stringify(this.initialState)) {
			return null;
		}
		if (this.state.title === "" || this.state.note === "") {
			return null
		}
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

// function Form(props) {
// 	const [title, setTitle] = useState("");
// 	const [note, setNote] = useState("");

// 	const setState = ({_title = "", _note = ""}) {
// 		setTitle(_title);
// 		setNote(_note);
// 	}

// 	const handleChange = (event) => {
// 		const [name, val] = event;
// 		// todo: come here
// 		setState()
// 	}

// 	const submitForm = (event) => {
// 		event.preventDefault();
// 		if (title == "" || note == "") return null;
// 		props.handleSubmit({
// 			title,
// 			note
// 		});
// 		setTitle("");
// 		setNote("");
// 	}


// 	return (
// 		<div className="form">
// 			<FormHeader></FormHeader>
// 			<form onSubmit={this.submitForm}>
// 				{/* <label htmlFor="name">Name</label> */}
// 				<input
// 					placeholder="title"
// 					type="text"
// 					name="title"
// 					id="title"
// 					value={title}
// 					onChange={this.handleChange}
// 				/>
// 				{/* <label htmlFor="note">Job</label> */}
// 				<textarea
// 					placeholder="note"
// 					type="text"
// 					name="note"
// 					id="note"
// 					size="80"
// 					value={note}
// 					spellCheck="false"
// 					onChange={this.handleChange}
// 				/>
// 				<button type="button" onClick={this.submitForm} onSubmitCapture={this.submitForm}> Add Task</button>
// 			</form>
// 		</div>
// 	)
// }


function FormHeader() {
	return <h2>add a new entry</h2>;
}

export default Form;
