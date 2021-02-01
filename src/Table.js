import React, { Component } from "react";

class Table extends Component {
	render() {
		const { characterData, removeCharacters } = this.props;

		return (
			<table>
				<TableHead />
				<TableBody
					characterData={characterData}
					removeCharacters={removeCharacters}
				/>
			</table>
		);
	}
}

function TableHead() {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
				<th>Remove</th>
			</tr>
		</thead>
	);
}

function TableBody(props) {
	const rows = props.characterData.map((row, index) => {
		return (
			<tr key={index}>
				{
					Object.values(row).map( itm => <td> {itm} </td> )
				}
				{/* <td> {row.name} </td>
				<td> {row.job} </td> */}
				<td>
					<button onClick={() => props.removeCharacters(index)}>
						Delete
					</button>
				</td>
			</tr>
		);
	});
	return <tbody> {rows} </tbody>;
}

export default Table;
