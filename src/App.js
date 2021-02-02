import React, { Component } from "react";
import Header from "./Header"
import Table from "./Table";
import Form from "./Form";
import ViewHolder from "./ViewHolder";
class App extends Component {
	state = {
		notes: [],
	};

	removenotes = (index) => {
		const { notes } = this.state;

		this.setState({
			notes: notes.filter((character, i) => {
				return i !== index;
			})
		});
	};

	handleSubmit = (newNote) => {
		this.setState({
			notes: [newNote, ...this.state.notes]
		});
	};

	// this method should return matching notes
	searchData = (q) => {
		const matches = this.state.notes.filter( ({title, note}) => {
			if (title.includes(q) || note.includes(q)) {
				return true;
			}
			return false;
		});
		return matches;
	}

	render() {
		const { notes } = this.state;
		
		return (
			<>
				<Header />
				<ViewHolder>
					<Form handleSubmit={this.handleSubmit} />
					<Table
						notesData={notes}
						removenotes={this.removenotes}
						searchData={this.searchData}
					/>
					{/* <tasks data={tasks} removeTask={removeTask}></tasks> */}
				</ViewHolder>
			</>
		);
	}
}

export default App;
