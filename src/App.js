import React, { Component } from "react";
import Header from "./Header"
import Table from "./Table";
import Form from "./Form";
import ViewHolder from "./ViewHolder";
class App extends Component {
	state = {
		characters: []
	};

	removeCharacters = (index) => {
		const { characters } = this.state;

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index;
			})
		});
	};

	handleSubmit = (newChar) => {
		this.setState({
			characters: [...this.state.characters, newChar]
		});
	};

	render() {
		const { characters } = this.state;
		
		return (
			<>
				<Header />
				<ViewHolder>
					<Form handleSubmit={this.handleSubmit} />
					<Table
						characterData={characters}
						removeCharacters={this.removeCharacters}
					/>
					{/* <tasks data={tasks} removeTask={removeTask}></tasks> */}
				</ViewHolder>
			</>
		);
	}
}

export default App;
