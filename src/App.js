import React, {Component} from "react";
import Table from "./Table"
import Form from "./Form"


class App extends React.Component{
	state = {
		characters: []
	};

	removeCharacters = (index) => {
		const {characters} = this.state;

		this.setState({
			characters: characters.filter( (character, i) => {
				return i !== index
			})
		})
	}

	handleSubmit = (newChar) => {
		this.setState({
			characters: [...this.state.characters, newChar]
		});
	}

	render() {
		const {characters} = this.state
		return (
			<>
			<header className="hero">
				<h1>Hello world</h1>
				<p>class vs className!</p>
			</header>
			<div>
				<Table characterData={characters} removeCharacters={this.removeCharacters} />
				<Form handleSubmit={this.handleSubmit}/>
			</div>
			</>
		)
	}
}

export default App;
