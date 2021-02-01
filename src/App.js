import React, { Component } from "react";
import Header from "./Header"
import Table from "./Table";
import Form from "./Form";
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
				<div>
					<Table
						characterData={characters}
						removeCharacters={this.removeCharacters}
					/>
					<Form handleSubmit={this.handleSubmit} />
				</div>
			</>
		);
	}
}

export default App;
