import React from "react";
import { useForm } from "./useForm";
import "./form.css";

// functional implementation
// https://pastebin.com/ABRZZaYc

function Form(props) {
	// const { title, note } = state;
	const [{ title, note }, handleChange, clearForm] = useForm({
		title: "",
		note: ""
	});

	const ref = React.useRef();

	const submitForm = (event) => {
		event?.preventDefault();
		if ([title, note].includes("")) return null;
		props.handleSubmit({ title, note });
		clearForm();
	};

	const keyDown = ({ ctrlKey, key, target }) => {
		// ctrl + Enter to submit form.
		if (ctrlKey === true && key === "Enter") {
			submitForm();
			target.blur();
			ref.current.focus();
		}
	};

	return (
		<div className="form">
			<FormHeader></FormHeader>
			<form onSubmit={submitForm}>
				<input
					placeholder="title"
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={handleChange}
					ref={ref}
				/>
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
				<button
					type="button"
					onClick={submitForm}
					onSubmitCapture={submitForm}
				>
					{" "}
					Add Task
				</button>
			</form>
		</div>
	);
}

function FormHeader() {
	return <h2>add a new entry</h2>;
}

export default Form;
