import React, { Component } from "react";

class Table extends Component {
	render() {
		const { characterData, removeCharacters } = this.props;

		return (
			<div className="content">
				<Header/>
				<table>
					{/* not the best way to do this */}
					<TableHead headings={Object.keys({name:"", job:""})}/>
					<TableBody
						characterData={characterData}
						removeCharacters={removeCharacters}
					/>
				</table>
			</div>
		);
	}
}

function Header() {
	return (
		<h2>all tasks</h2>	
	)
}

function TableHead(props) {
	console.log(props)
	return (
		<thead>
			<tr>
				{/* {props.headings.map( (head) => <th>{head}</th>)} */}
				<th>name</th>
				<th>job</th>
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
